import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '@components/common/loading'
import {createNotifi} from '@components/common/notification'
import {checkLoginRequest} from '../../utils/checkLoginOrSignup'
import {isEmpty} from '../../utils/lodash'
import classNames from 'classnames'


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false,
            errors: {},
        }
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {username,password} = this.state
        const errors = checkLoginRequest({username,password})
        this.setState({loading:true,errors})
        if(!isEmpty(errors)){
            this.setState({loading:false})
            return;
        }
        this.props.login({username,password}).then(res=>{
            if(res){
                this.setState({loading:false})
                this.context.router.history.push('/')
                createNotifi('登录成功!')
            }
        }).catch(() => {
            createNotifi('登录失败,用户名或密码有误!','error')
            this.setState({loading:false,password: ''})
        })
    }
    render() {
        const {errors} = this.state
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className={classNames('field',{error:!!errors.username})}>
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        autoComplete="off"
                        placeholder="请输入用户名" />
                    {errors.username && <div style={{color:'red'}}>{errors.username}</div>}
                </div>
                <div className={classNames('field',{error:!!errors.password})}>
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="请输入密码" />
                    {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
                </div>
                <button className="ui button primary"
                    type="submit">Login</button>
                <Loading loading={this.state.loading}/>
            </form>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
}

export default LoginForm;