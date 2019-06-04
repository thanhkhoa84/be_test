import '@babel/polyfill';
import React from 'react';
import { render } from "react-dom";

import './scss/app.scss';
import configureStore from './store/configureStore';
import initialState from './store/initialState';

import Root from './components/Root';

const store = configureStore(initialState);

render(
    <Root store={store} />
    , document.getElementById('app'));