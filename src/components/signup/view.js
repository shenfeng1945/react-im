import React, { Component } from 'react'
import SignupForm from './SingupForm'
import NavBar from '../common/nav-bar'
import './index.scss'

class Signup extends Component {
  render() {
    return (
      <div className="signup">
         <NavBar path={this.props.match.path}/>
         <SignupForm />
      </div>
    )
  }
}

export default Signup;