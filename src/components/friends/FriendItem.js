import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { selectUser } from './actions'
import { connect } from 'react-redux'

class FriendItem extends Component {
    selectCurrentUser = () => {
        this.props.selectUser(this.props.item)
    }
    render() {
        return (
            <li onClick={this.selectCurrentUser}>
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
export default connect(null, { selectUser })(FriendItem)
