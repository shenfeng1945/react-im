import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Logout } from './actions'
import { setCurrentUser } from '../login/actions'
import PropTypes from 'prop-types'
import {getLocal} from '../../utils/localStorage'
import {USER_NAME} from '../../utils/constants'
class Users extends Component {
    render() {
        return (
            <div className="users">
                <div className="avatar">
                    <img src="./test.jpg" alt="" />
                </div>
                <div className="username">
                    {getLocal(USER_NAME)}
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