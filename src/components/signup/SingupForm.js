import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '@components/common/loading'
import classNames from 'classnames'
import { checkSignupRequest } from '../../utils/checkLoginOrSignup'
import { isEmpty } from '../../utils/lodash'
import {createNotifi} from '../common/notification'

class SingupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            conPassword: '',
            loading: false,
            errors: {},
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { username, password, conPassword } = this.state
        const errors = checkSignupRequest({ username, password, conPassword })
        this.setState({ loading: true, errors })
        if (!isEmpty(errors)) {
            this.setState({ loading: false })
            return;
        }
        this.props.signup({ username, password }).then(
            (result) => {
                if (result.entities.length) {
                    // 登录
                    this.props.login({ username, password }).then(res => {
                        if (res) {
                            this.setState({ loading: false })
                            this.context.router.history.push('/')
                            createNotifi('注册成功!')
                            this.props.signupPost({username}).then((res)=>{})
                        }
                    }).catch(()=>{
                       createNotifi('注册失败!','error')
                       this.setState({loading:false,password: '',conPassword:''})
                    })
                }
            },
            (error) => {
               if(error.type === 17){
                    createNotifi('该用户已存在','error')
                    this.setState({loading:false,password: '',conPassword:'',username: ''})
               }
            }
        )
    }
    render() {
        const { errors } = this.state;
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className={classNames('field', { error: !!errors.username })}>
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        autoComplete="off"
                        placeholder="请输入用户名(不少于五位)" />
                    {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
                </div>
                <div className={classNames('field', { error: !!errors.password })}>
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="请输入至少六位的密码" />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
                <div className={classNames('field', { error: !!errors.conPassword })}>
                    <label>Confirm Password</label>
                    <input type="password"
                        name="conPassword"
                        value={this.state.conPassword}
                        onChange={this.onChange}
                        placeholder="请再次确认密码" />
                    {errors.conPassword && <div style={{ color: 'red' }}>{errors.conPassword}</div>}
                </div>
                <button className="ui button primary"
                    type="submit">SignUp</button>
                <Loading loading={this.state.loading} />
            </form>
        )
    }
}
SingupForm.contextTypes = {
    router: PropTypes.object
}

export default SingupForm;
