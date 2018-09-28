import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SingupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            conPassword: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        const {username,password,conPassword} = this.state
        this.props.signup({username,password}).then(
            (e) => {
                console.log(e,'success')
            },
            (e) => {
                console.log(e,'error')
            }
        )
    }
    render() {
        return (
            <form className="ui form" onSubmit={}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" 
                           name="username"
                           value={this.state.username}
                           onChange={this.onChange}
                           placeholder="请输入用户名(不少于三位)" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" 
                           name="password"
                           value={this.state.password}
                           onChange={this.onChange}
                           placeholder="请输入至少六位的密码" />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="password"
                           name="conPassword"
                           value={this.state.conPassword}
                           onChange={this.onChange}
                           placeholder="请再次确认密码" />
                </div>
                <button className="ui button primary"
                    type="submit">SignUp</button>
            </form>
        )
    }
}
SingupForm.contextTypes = {
    router: PropTypes.object
}

export default SingupForm;
