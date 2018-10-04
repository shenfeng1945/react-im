import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchItem extends Component {
    static propTypes = {
        // friendItem: PropTypes.object.isRequired
    }
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
        const {username} = this.props.searchItem 
        const addFriend = (
            <div className="ui button green mini"
                onClick={() => this.props.addRoster(username)}>
                加为好友</div>
        )
        const isFriend = (
            <div className="ui button gray mini">
                    已为好友</div>
        )
        return (
            <li>
                <div className="f-user">
                    <div className="avatar">
                        <img src="./user.jpg" alt="React" />
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
