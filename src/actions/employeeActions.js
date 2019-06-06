import * as types from './actionTypes';
import * as api from '../api';
import { beginApiCall, apiCallError } from "./apiStatusActions";

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

export const deleteEmployeeSuccess = () => ({
    type: types.DELETE_EMPLOYEE_SUCCESS
});

export const fetchAllEmployees = () => (dispatch) => {
    dispatch(beginApiCall());
    return api.getAllEmployees()
        .then(employees => {
            dispatch(fetchAllEmployeeSuccess(employees));
            return employees;
        })
        .catch(err => {
            dispatch({ type: types.FETCH_ALL_EMPLOYEES_FAILURE });
            dispatch(apiCallError(err));
            console.log(err);
        });
};

export const fetchEmployeebyId = (id) => (dispatch) => {
    dispatch(beginApiCall());
    return api.getEmployeebyId(id)
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            }
        })
        .then(resp => {
            dispatch(getEmployeeSuccess(resp));
            return resp;
        })
        .catch(err => {
            dispatch(apiCallError(err));
            dispatch({ type: types.GET_EMPLOYEE_FAILURE });
        });
}

export const createNewEmployee = (employee) => (dispatch) => {
    dispatch(beginApiCall());
    return api.createNewEmployee(employee)
        .then(resp => {
            const temp = resp.clone()
            if (resp.status == 200) {
                dispatch(createNewEmployeeSuccess(temp.json()));
            } else {
                dispatch(apiCallError(err));
                dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
            }
            return resp.text();
        })
        .then(resp => { return resp })
        .catch(err => {
            console.log(err)
            dispatch(apiCallError(err));
            dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
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
    dispatch(beginApiCall());
    return api.deleteEmployee(id)
        .then(function (resp) {
            if (resp.status == 200) {
                dispatch(deleteEmployeeSuccess());
            } else {
                dispatch(apiCallError(err));
                dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
            }
            return resp.text();
        })
        .then(resp => { return resp })
        .catch(err => {
            dispatch(apiCallError(err));
            dispatch({ type: types.DELETE_EMPLOYEE_FAILURE });
        });
};
