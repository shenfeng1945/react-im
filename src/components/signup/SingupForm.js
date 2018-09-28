import React, { Component } from 'react'

export default class SingupForm extends Component {
    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input type="text" placeholder="请输入用户名(不少于三位)" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" placeholder="请输入至少六位的密码" />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="text" placeholder="请再次确认密码" />
                </div>
                <button className="ui button primary"
                    type="submit">SignUp</button>
            </form>
        )
    }
}
