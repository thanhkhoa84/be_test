import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';

import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <App />
        </Router>
    </Provider>
);

export default Root;