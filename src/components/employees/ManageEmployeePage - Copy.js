import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router";
import EmployeeForm from './EmployeeForm';

import { fetchTitles } from '../../actions/titlesActions';
import { createNewEmployee, updateEmployee, getEmployeebyId, deleteEmployee } from '../../actions/employeeActions';

class ManageEmployeePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            titles: [],
            errors: {},
            employee: Object.assign({}, props.employee)
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchTitles();

        const { employeeId } = this.props;
        if (employeeId) {
            this.props.getEmployeebyId(employeeId);
        }
    }

    formIsValid() {
        const { name, email, title } = this.state.employee;
        const errors = {};

        if (!name) errors.name = "Name is required";
        if (!email) errors.email = "Email is required.";
        if (!title) errors.title = "Job title is required";

        this.setState({ errors: errors });
        return Object.keys(errors).length === 0;
    }

    deleteUser() {
        this.props.deleteEmployee(this.props.employeeId)
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            employee: Object.assign({}, this.state.employee, {
                [name]: value
            })
        });
        e.preventDefault();
    }

    submitForm(e) {
        e.preventDefault();
        if (!this.formIsValid()) {
            return;
        }
        const { employee } = this.state;
        const { employeeId, titles } = this.props;

        employee.titleId = titles.filter(t => {
            return t.name == employee.title
        })[0].id;

        if (employeeId) {
            this.props.updateEmployee(employee);
        } else {
            this.props.createNewEmployee(employee);
        }
    }

    render() {
        return (
            <div className="row">
                <h4>{!!this.props.employeeId ? 'Edit' : 'Add New'} Employee</h4>
                <EmployeeForm
                    options={this.props.titles}
                    errors={this.state.errors}
                    employee={this.state.employee}
                    submitForm={this.submitForm}
                    handleChange={this.handleChange}
                />
                {this.props.employeeId && <button onClick={this.deleteUser}>DELETE</button>}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let employee = {
        id: '',
        name: '',
        title: '',
        titleId: '',
        email: ''
    }

    if (ownProps.match.params.id) {
        employee = Object.assign({}, employee, state.employee);
    }

    return {
        employee: state.employee,
        employeeId: ownProps.match.params.id,
        titles: state.titles,
    }
};

export default withRouter(connect(mapStateToProps, { fetchTitles, getEmployeebyId, updateEmployee, createNewEmployee, deleteEmployee })(ManageEmployeePage));
