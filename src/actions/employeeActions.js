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
            const json = resp.clone().json();
            const text = resp.clone().text();
            if (resp.status == 200) {
                dispatch(getEmployeeSuccess(resp.json()));
                return json;
            } else {
                dispatch(apiCallError());
                return text;
            }
        })
        .then(resp => { return resp })
        .catch(err => {
            dispatch(apiCallError(err));
            dispatch({ type: types.GET_EMPLOYEE_FAILURE });
        });
}

export const createNewEmployee = (employee) => (dispatch) => {
    dispatch(beginApiCall());
    return api.createNewEmployee(employee)
        .then(resp => {
            const json = resp.clone().json();
            const text = resp.clone().text();
            if (resp.status == 200) {
                dispatch(createNewEmployeeSuccess(json));
            } else {
                dispatch(apiCallError());
                dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
            }
            return resp.text();
        })
        .then(resp => { return resp })
        .catch(err => {
            dispatch(apiCallError(err));
            dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
        });
}

export const updateEmployee = (employee) => (dispatch) => {
    return api.updateEmployee(employee)
        .then(resp => {
            if (resp.status == 200) {
                dispatch(updateEmployeeSuccess(employee));
            } else {
                dispatch(apiCallError());
                dispatch({ type: types.UPDATE_EMPLOYEE_FAILURE });
            }
            return resp.text();
        })
        .then(resp => { return resp })
        .catch(err => {
            dispatch({ type: types.UPDATE_EMPLOYEE_FAILURE });
        });
};

export const deleteEmployee = (id) => (dispatch) => {
    dispatch(beginApiCall());
    return api.deleteEmployee(id)
        .then(function (resp) {
            if (resp.status == 200) {
                dispatch(deleteEmployeeSuccess());
            } else {
                dispatch(apiCallError());
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
