import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import App from './components/App/App'
import Login from './components/login'
import SignUp from './components/signup'
import { BrowserRouter as Router } from "react-router-dom";

const Routes = () => (
    <Router>
        <Fragment>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </Fragment>
    </Router>
)
export default Routes;

