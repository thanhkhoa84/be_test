import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './commons/Header';
import EmployeesPage from './employees/EmployeesPage';
import ManageEmployeePage from './employees/ManageEmployeePage';
import PageNotFound from './PageNotFound';

const App = () => (
    <div>
        <Header />
        <div className="container">
            <Switch>
                <Route path="/" exact component={EmployeesPage} />
                <Route path="/employee/" exact component={ManageEmployeePage} />
                <Route path="/employee/:id" exact component={ManageEmployeePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover />
    </div>
)

export default App;