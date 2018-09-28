import React, { Component } from 'react'
import LoginForm from './LoginForm'
import NavBar from '../common/nav-bar'
import './index.scss'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <NavBar path={this.props.match.path}/>
        <LoginForm />
      </div>
    )
  }
}

export default Login;