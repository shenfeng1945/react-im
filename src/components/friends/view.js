import React, { Component } from 'react'
import FriendItem from './FriendItem'
import './index.scss'
import { connect } from 'react-redux';

class FriendLists extends Component {
  render() {
     console.log(this.props.friendList,'props')
    return (
       <ul className="friends">
           <FriendItem />
           <FriendItem />
       </ul>
    )
  }
}

export default connect()(FriendLists)