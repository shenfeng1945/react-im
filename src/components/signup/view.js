import React, { Component } from 'react'
import SignupForm from './SingupForm'
import NavBar from '../common/nav-bar'
import './index.scss'
import {connect} from 'react-redux'
import {SignUpAction} from './actions'

class Signup extends Component {
  onSubmit = (data) => {
      this.props.SignUpAction(data)
  }
  render() {
    return (
      <div className="signup">
         <NavBar path={this.props.match.path}/>
         <SignupForm signup={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(null,{SignUpAction})(Signup);