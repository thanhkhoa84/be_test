import { combineReducers } from 'redux';

import { employeeReducer, employeesReducer } from './employeeReducer';
import titles from './titleReducers';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    titles,
    employees: employeesReducer,
    employee: employeeReducer,
    apiCallsInProgress
});

export default rootReducer;