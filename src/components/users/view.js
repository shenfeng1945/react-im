import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { setCurrentUser } from '../login/actions'
import PropTypes from 'prop-types'
import { getLocal } from '../../utils/localStorage'
import { USER_NAME } from '../../utils/constants'
import { getCookie, deleteCookie } from '../../utils/authorization'
import { uploadImg } from '../../utils/upload'
import { getAvatar,setUserAvatar } from './actions'

const inputStyle = {
    display: 'none'
}
class Users extends Component {
    constructor() {
        super()
        this.state = {
            avatar: '',
            loaded: false
        }
        this.imgInput = React.createRef()
    }
    componentWillMount() {
        const username = getLocal(USER_NAME);
        if (!getCookie()) {
            this.context.router.history.push('/login')
        }
        if (username) {
            this.props.getAvatar(username)
            .then(res => {
                if (res.data.avatar) {
                    this.setState({ avatar: res.data.avatar })
                }
                this.setState({loaded:true})
                this.props.setUserAvatar(res.data.avatar)
            })
        }

    }
    Logout = () => {
        window.WebIM.conn.close()
        deleteCookie('token')
        this.context.router.history.push('/login')
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.isAuthorization) {
            this.context.router.history.push('/login')
        }
    }
    handleChange = () => {
        const input = this.imgInput.current
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ avatar: e.target.result })
                uploadImg(e.target.result, getLocal(USER_NAME))
            }
            reader.readAsDataURL(input.files[0])
        }
    }
    render() {
        const username = getLocal(USER_NAME) || '';
        const fristname = username.charAt(0).toUpperCase()
        const haveAvatar = (
            <div className="avatar u-avatar">
                <img src={this.state.avatar} alt="" />
                <label>
                    更换头像
                   <input type="file" ref={this.imgInput} name="filename" style={inputStyle} accept="image/gif, image/jpeg, image/png" onChange={this.handleChange} />
                </label>
            </div>
        )
        const noAvatar = (
            <div className="no-avatar u-avatar">
                {fristname}
                <label>
                    更换头像
                 <input type="file" name="filename" ref={this.imgInput} style={inputStyle} accept="image/gif, image/jpeg, image/png" onChange={this.handleChange} />
                </label>
            </div>
        )
        if (!this.props.isAuthorization)
            return (
                <div className="users">
                    {
                        this.state.loaded &&
                        (
                            this.state.avatar ?
                            haveAvatar :
                            noAvatar
                        )
                    }
                    <div className="user">
                        <div className="username">
                            {username}
                        </div>
                        <div className="logout" onClick={this.Logout}>
                            登出
                            </div>
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

export default connect(mapStateToProps, { getAvatar, setCurrentUser ,setUserAvatar})(Users)