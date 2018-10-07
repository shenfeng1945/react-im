import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { getAvatar } from '../users/actions'
import {setFriendAvatar} from './actions'

class FriendItem extends Component {
    constructor() {
        super()
        this.state = {
            avatar: '',
            loaded: false
        }
    }
    componentWillMount() {
        this.props.getAvatar(this.props.item.name)
        .then(res => {
            this.setState({ avatar: res.data.avatar, loaded: true })
            this.props.setFriendAvatar({
                name: this.props.item.name,
                avatar: res.data.avatar
            })
        })
    }
    render() {
        const { currIndex, active } = this.props
        const firstName = this.props.item.name.charAt(0).toUpperCase()
        const haveAvatar = (
            <div className="avatar">
                <img src={this.state.avatar} alt="" /> 
            </div>
        )
        const noAvatar = (
            <div className="no-avatar-f">
                {firstName}
            </div>
        )
        return (
            <li onClick={() => this.props.selectCurrentUser(currIndex)} className={classNames({ active })}>
                {
                    this.state.loaded &&
                    (
                        this.state.avatar ?
                            haveAvatar :
                            noAvatar
                    )
                }
                <div className="friend">
                    <div className="name">{this.props.item.name}</div>
                    <div className="lastMsg">{
                        this.props.item.recentMsg ?
                            this.props.item.recentMsg :
                            ''
                    }</div>
                </div>
            </li>
        )
    }
}
FriendItem.propTypes = {
    item: PropTypes.object
}
export default connect(null, { getAvatar ,setFriendAvatar })(FriendItem)
