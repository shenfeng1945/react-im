import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Routes from './Routes'
import store from './Store'

ReactDOM.render(
    <Provider store={store}>
       <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
