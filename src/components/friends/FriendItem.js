import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class FriendItem extends Component {
    render() {
        const {currIndex,active} = this.props
        return (
            <li onClick={() => this.props.selectCurrentUser(currIndex)} className={classNames({active})}>
                <div className="avatar">
                    <img src="./user.jpg" alt="React" />
                </div>
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
export default FriendItem
