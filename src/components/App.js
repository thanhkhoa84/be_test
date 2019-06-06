import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Header from './commons/Header';
import Loader from './commons/Loader';
import EmployeesPage from './employees/EmployeesPage';
import ManageEmployeePage from './employees/ManageEmployeePage';
import PageNotFound from './PageNotFound';

const App = () => (
    <div>
        <Header />
        <div className="container">
            {/* <Loader /> */}
            <Switch>
                <Route path="/" exact component={EmployeesPage} />
                <Route path="/employee/" exact component={ManageEmployeePage} />
                <Route path="/employee/:id" exact component={ManageEmployeePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </div>
)

export default App;