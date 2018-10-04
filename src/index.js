import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Routes from './Routes'
import store from './Store'
import { setCurrentUser } from './components/login/actions'
import { getCookie } from './utils/authorization'


if (getCookie()) {
    setCurrentUser(getCookie()).then(res => {
        console.log(res, 'success')
    }).catch(res => {
        console.log(res, 'error')
    })
}else{
}


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
