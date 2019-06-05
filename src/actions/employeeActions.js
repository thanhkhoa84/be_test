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

export const deleteEmployeeSuccess = () => ({
    type: types.DELETE_EMPLOYEE_SUCCESS
});


export const fetchAllEmployees = () => (dispatch) => {
    return api.getAllEmployees()
        .then(employees => {
            dispatch(fetchAllEmployeeSuccess(employees));
            return employees;
        })
        .catch(err => {
            dispatch({ type: types.FETCH_ALL_EMPLOYEES_FAILURE });
            console.log(err);
        });
};

export const fetchEmployeebyId = (id) => (dispatch) => {
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
            dispatch({ type: types.GET_EMPLOYEE_FAILURE });
        });
}

export const createNewEmployee = (employee) => (dispatch) => {
    return api.createNewEmployee(employee)
        .then(resp => {
            const temp = resp.clone()
            if (resp.status == 200) {
                dispatch(createNewEmployeeSuccess(temp.json()));
            } else {
                dispatch({ type: types.CREATE_EMPLOYEE_FAILURE });
            }
            return resp.text();
        })
        .then(resp => { return resp })
        .catch(err => {
            console.log(err)
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
    return api.deleteEmployee(id)
        .then(function (resp) {
            return resp.json()
        })
        .then(status => {
            dispatch(deleteEmployeeSuccess(status));
        })
        .catch(err => {
            dispatch({ type: types.DELETE_EMPLOYEE_FAILURE });
        });
};
