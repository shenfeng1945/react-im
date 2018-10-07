import React, { Component } from 'react'
import { connect } from 'react-redux';
import classNames from 'classnames'
import { IpUrl } from '../../utils/constants'
import eventEmitter from '../../utils/event'

class SearchItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFriend: false
        }
    }
    componentWillMount() {
        this.props.friendList.forEach(item => {
            if (item.name === this.props.searchItem.username) {
                this.setState({ isFriend: true })
            }
        })
    }
    render() {
        const { username, avatar } = this.props.searchItem
        const firstName = username.charAt(0).toUpperCase()
        const addFriend = (
            <div className="ui button green mini"
                onClick={() => {
                    this.props.addRoster(username)
                    eventEmitter.emit('toggleLeft',true)
                }}>
                加为好友</div>
        )
        const isFriend = (
            <div className="ui button gray mini">
                已为好友</div>
        )
        return (
            <li>
                <div className="f-user">
                    <div className={classNames('avatar', { 'no-avatar-f': !avatar })}>
                        {
                            avatar ?
                                <img src={`${IpUrl}/${avatar}`} alt="" /> :
                                firstName
                        }

                    </div>
                    <div className="name">{username}</div>
                </div>
                {
                    this.state.isFriend ?
                        isFriend :
                        addFriend
                }

            </li>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        friendList: state.friendListReducer
    }
}
export default connect(mapStateToProps)(SearchItem)
