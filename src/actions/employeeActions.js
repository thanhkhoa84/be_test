import * as types from './actionTypes';
import * as api from '../api'

export const fetchAllEmployeeSuccess = (employees) => ({
    type: types.FETCH_ALL_EMPLOYEES_SUCCESS,
    employees
});

export const getEmployeeSuccess = (employee) => ({
    type: types.GET_EMPLOYEE_SUCCESS,
    employee
});

export const createNewEmployeeSuccess = (employee) => ({
    type: types.CREATE_EMPLOYEE_SUCCESS,
    employee
});

export const updateEmployeeSuccess = (employee) => ({
    type: types.UPDATE_EMPLOYEE_SUCCESS,
    employee
});


export const fetchAllEmployees = () => (dispatch) => {
    return api.getAllEmployees()
        .then(employees => {
            dispatch(fetchAllEmployeeSuccess(employees));
        })
        .catch(err => {
            dispatch({ type: types.FETCH_ALL_EMPLOYEES_FAILURE });
            console.log(err);
        });
};

export const getEmployeebyId = (id) => (dispatch) => {
    return api.getEmployeebyId(id)
        .then(employees => {
            dispatch(getEmployeeSuccess(employees));
        })
        .catch(err => {
            dispatch({ type: types.GET_EMPLOYEE_FAILURE });
            console.log(err);
        });
}

export const createNewEmployee = (employee) => (dispatch) => {
    return api.createNewEmployee(employee)
        .then(employee => {
            dispatch(createNewEmployeeSuccess(status));
        })
        .catch(err => {
            dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
            console.log(err);
        });
}

export const updateEmployee = (employee) => (dispatch) => {
    return api.updateEmployee(employee)
        .then(employee => {
            dispatch(updateEmployeeSuccess(employee));
        })
        .catch(err => {
            dispatch({ type: types.UPDATE_EMPLOYEE_FAILURE });
            console.log(err);
        });
};

export const deleteEmployee = (id) => (dispatch) => {
    return api.deleteEmployee(id)
        .then(function (resp) {
            return resp.json()
        })
        .then(status => {
            dispatch(updateEmployeeSuccess(status));
        })
        .catch(err => {
            dispatch({ type: types.UPDATE_EMPLOYEE_FAILURE });
            console.log(err);
        });
};
