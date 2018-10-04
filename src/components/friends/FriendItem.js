import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FriendItem extends Component {
    render() {
        return (
            <li>
                <div className="avatar">
                    <img src="./user.jpg" alt="React" />
                </div>
                <div className="friend">
                    <div className="name">{this.props.item.name}</div>
                    <div className="lastMsg">Hello World!</div>
                </div>
            </li>
        )
    }
}
FriendItem.propTypes = {
    item: PropTypes.object
}
export default FriendItem
