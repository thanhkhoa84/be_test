import { combineReducers } from 'redux';

import { employeeReducer, employeesReducer } from './employeeReducer';
import titles from './titleReducers';

const rootReducer = combineReducers({
    titles,
    employees: employeesReducer,
    employee: employeeReducer
});

export default rootReducer;