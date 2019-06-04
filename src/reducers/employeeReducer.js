import * as types from '../actions/actionTypes';

export const employeeReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEE_SUCCESS:
            return action.employee;

        case types.CREATE_EMPLOYEES_SUCCESS:
            return [...state, action.employee];

        case types.CREATE_EMPLOYEES_FAILURE:
            return state;

        default: return state;
    }
}

export const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_ALL_EMPLOYEES_SUCCESS:
            return Object.assign([], [...action.employees]);

        case types.FETCH_ALL_EMPLOYEES_FAILURE:
            return state;

        default: return state;
    }
}
