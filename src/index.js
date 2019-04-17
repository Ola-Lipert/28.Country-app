import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import store from './store';
import DevTools from './DevTools';
import './country.css';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
        <DevTools/>
    </Provider>,
    document.getElementById('root')
);
