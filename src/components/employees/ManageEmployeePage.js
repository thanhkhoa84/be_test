import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import validator from 'validator';

import Loader from '../commons/Loader';
import EmployeeForm from './EmployeeForm';

import { fetchTitles } from '../../actions/titlesActions';
import { createNewEmployee, updateEmployee, fetchEmployeebyId, deleteEmployee } from '../../actions/employeeActions';

class ManageEmployeePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errors: {},
            employee: null,
            saving: false,
            isValid: false
        }

        this.newEmployee = {
            email: '',
            id: '',
            name: '',
            title: '',
            titleId: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchTitles();

        const id = this.props.match.params.id;
        if (id) {
            this.props.fetchEmployeebyId(id)
                .then(resp => { this.setState({ employee: resp, isLoading: false, isValid: true }) });
        } else {
            this.setState({ employee: this.newEmployee, isLoading: false })
        }
    }

    componentWillUnmount() {
        this.setState({ employee: this.newEmployee });
    }

    redirect() {
        this.setState({ employee: this.newEmployee }, () => {
            this.props.history.push('/');
        });
    }

    deleteUser() {
        this.props.deleteEmployee(this.props.match.params.id)
            .then((resp) => {
                if (resp == 'OK') {
                    toast.success('Employee deleted!');
                    this.redirect();
                } else {
                    toast.error(resp);
                }
            });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            employee: Object.assign({}, this.state.employee, {
                [name]: value
            })
        }, () => {
            this.validateInput();
        });
        e.preventDefault();
    }

    validateInput() {
        const errors = {};

        const { name, email, title } = this.state.employee;

        if (validator.isEmpty(name)) {
            errors.name = 'Name is required'
        }

        if (validator.isEmpty(email)) {
            errors.email = 'Email is required'
        }

        if (!validator.isEmail(email)) {
            errors.email = 'Invalid email address'
        }

        if (validator.isEmpty(title)) {
            errors.title = 'Title is required'
        }

        this.setState({ errors, isValid: Object.keys(errors).length === 0 })
    }

    submitForm(e) {
        e.preventDefault();
        if (!this.state.isValid) {
            this.validateInput();
            return;
        }

        const { employee } = this.state;
        const { titles } = this.props;
        const id = this.props.match.params.id;

        this.setState({ saving: true })

        employee.titleId = titles.filter(t => {
            return t.name == employee.title
        })[0].id;

        if (id) {
            this.props.updateEmployee(employee)
                .then((resp) => {
                    if (resp == 'OK') {
                        toast.success("Employee updated!");
                        this.setState({ saving: false });
                    } else {
                        toast.error(resp);
                        this.setState({ saving: false });
                    }
                })
                .catch(err => {
                    this.setState({ saving: false });
                });
        } else {
            this.props.createNewEmployee(employee)
                .then((resp) => {
                    if (resp == 'OK') {
                        toast.success("Employee created!");
                        this.setState({ saving: false });
                        this.redirect();
                    } else {
                        toast.error(resp);
                        this.setState({ saving: false });
                    }
                })
                .catch(err => {
                    this.setState({ saving: false });
                    console.log(err);
                });
        }
    }

    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return (<Loader />)
        }
        return (
            <div className="row">
                {this.state.employee && <EmployeeForm
                    edit={!!this.props.match.params.id}
                    options={this.props.titles}
                    errors={this.state.errors}
                    employee={this.state.employee}
                    submitForm={this.submitForm}
                    handleChange={this.handleChange}
                    onBlur={this.validateInput}
                    saving={this.state.saving}
                    isValid={this.state.isValid}
                    deleteUser={this.deleteUser}
                />}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    titles: state.titles,
    isLoading: state.apiCallsInProgress > 0
});

export default withRouter(connect(mapStateToProps, { fetchTitles, fetchEmployeebyId, updateEmployee, createNewEmployee, deleteEmployee })(ManageEmployeePage));
