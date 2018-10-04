import React, { Component } from 'react'
import FriendItem from './FriendItem'
import './index.scss'
import { connect } from 'react-redux';

class FriendLists extends Component {
  render() {
     console.log(this.props.friendList,'props')
    return (
       <ul className="friends">
          {this.props.friendList.map((item,index)=>{
            return <FriendItem key={index} item={item}/>
          })}
       </ul>
    )
  }
}
const mapStateToProps = (state) => {
   return {
     friendList: state.friendsReducer 
   }
}

export default connect(mapStateToProps)(FriendLists)