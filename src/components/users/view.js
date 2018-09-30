import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Logout } from './actions'
import { setCurrentUser } from '../login/actions'
import { getCookie } from '../../utils/authorization'
import {createNotifi} from '../common/notification'
import PropTypes from 'prop-types'

class Users extends Component {
    componentDidMount() {
        this.props.setCurrentUser(getCookie()).then(_ => {
            createNotifi('连接成功!', 'success')
            console.log('success')
        }).catch(() => {
            createNotifi('连接失败,请重新登录!', 'error')
            console.log('error')
        })
        
        // .then(res => {
            // if (!res) {
                // this.context.router.history.push('/login')
            // }
        // })
    }
    render() {
        return (
            <div className="users">
                <div className="avatar">
                    <img src="./test.jpg" alt="" />
                </div>
                <div className="username">
                    shenfeng1945
                </div>
                <div className="logout" onClick={this.props.Logout}>
                    登出
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthrization: state.userReducer.isAuthorization
    }
}

Users.contextTypes = {
    router: PropTypes.object
}

export default connect(mapStateToProps, { Logout,setCurrentUser })(Users)