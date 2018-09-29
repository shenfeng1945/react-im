import React, { Component } from 'react'
import LoginForm from './LoginForm'
import NavBar from '../common/nav-bar'
import './index.scss'
import {connect} from 'react-redux'
import {LoginAction} from './actions'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <NavBar path={this.props.match.path}/>
        <LoginForm login={this.props.LoginAction}/>
      </div>
    )
  }
}

export default connect(null,{LoginAction})(Login);