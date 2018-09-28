import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
        <form className="ui form">
        <div className="field">
            <label>Username</label>
            <input type="text" placeholder="请输入用户名" />
        </div>
        <div className="field">
            <label>Password</label>
            <input type="text" placeholder="请输入密码" />
        </div>
        <button className="ui button primary"
            type="submit">Login</button>
    </form>
    )
  }
}
