import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import App from './App';

const history = createBrowserHistory();

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

export default Root;