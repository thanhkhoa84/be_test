import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router";
import EmployeeForm from './EmployeeForm';

import { fetchTitles } from '../../actions/titlesActions';
import { createNewEmployee, updateEmployee, getEmployeebyId } from '../../actions/employeeActions';

class ManageEmployeePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            titles: [],
            employee: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchTitles();
        const { employeeId } = this.props;
        if (employeeId) {
            this.props.getEmployeebyId(employeeId)
                .then(employee => {
                    this.forceUpdate();
                });
        }
    }


    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
    }

    submitForm(e) {
        e.preventDefault();
        const { employee, titles } = this.props;
        const { employeeId } = this.props;

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
                    employee={this.props.employee}
                    submitForm={this.submitForm}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let employee = {
        id: null,
        name: '',
        title: '',
        titleId: 1,
        email: ''
    }

    if (ownProps.match.params.id) {
        employee = Object.assign({}, employee, state.employee)
    }

    return {
        titles: state.titles,
        employee,
        employeeId: ownProps.match.params.id
    }
};

export default withRouter(connect(mapStateToProps, { fetchTitles, getEmployeebyId, updateEmployee, createNewEmployee })(ManageEmployeePage));
