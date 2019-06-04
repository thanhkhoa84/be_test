import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import EmployeesPage from './employees/EmployeesPage';
import ManageEmployeePage from './employees/ManageEmployeePage';
import PageNotFound from './PageNotFound';

const App = () => (
    <div className="container">
        <Link to="/"><h1 className="text-center">B Dashboard</h1></Link>
        <Switch>
            <Route path="/" exact component={EmployeesPage} />
            <Route path="/employee/" exact component={ManageEmployeePage} />
            <Route path="/employee/:id" exact component={ManageEmployeePage} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
)

export default App;