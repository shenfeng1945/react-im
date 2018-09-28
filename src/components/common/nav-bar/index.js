import React, { Component, Fragment } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        const { path } = this.props
        const ToLogin = (
            <header className="nav-bar">
               <div className="logo">
                    <span className="big">IM</span>
                    欢迎注册
               </div>
                <div>
                    已有账号?
                    <Link to="/login">去登录</Link>
               </div>
            </header>
        )
        const ToSignup = (
            <header className="nav-bar">
               <div className="logo">
                    <span className="big">IM</span>
                    欢迎登录
               </div>
                <div>
                    没有账号?
                    <Link to="/signup">去注册</Link>
               </div>
            </header>
        )
        if (path === '/login') {
            document.title = 'IM 登录'
            return (
                <Fragment>
                    {ToSignup}
                </Fragment>
            )
        } else if (path === '/signup') {
            document.title = 'IM 注册'
            return (
                <Fragment>
                    {ToLogin}
                </Fragment>
            )
        }
    }
}
