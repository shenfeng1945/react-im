import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Logout } from './actions'
// import {setCurrentUser} from '../login/actions'
// import {getCookie} from '../../utils/authorization'

class Users extends Component {
    componentDidMount() {
        // setCurrentUser(getCookie())
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

export default connect(mapStateToProps, { Logout })(Users)