import React, { Component } from 'react'
import SignupForm from './SingupForm'
import NavBar from '../common/nav-bar'
import './index.scss'
import {connect} from 'react-redux'
import {SignUpAction,SignUpPost} from './actions'
import {LoginAction} from '../login/actions'

class Signup extends Component {
  render() {
    return (
      <div className="signup">
         <NavBar path={this.props.match.path}/>
         <SignupForm signup={this.props.SignUpAction} 
                     signupPost={this.props.SignUpPost}
                     login={this.props.LoginAction}/>
      </div>
    )
  }
}

export default connect(null,{SignUpAction,LoginAction,SignUpPost})(Signup);