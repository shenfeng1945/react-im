import React, { Component } from 'react'
import FriendItem from './FriendItem'
import './index.scss'

export default class FriendLists extends Component {
  render() {
    return (
       <ul className="friends">
           <FriendItem />
           <FriendItem />
       </ul>
    )
  }
}
