import React, { Component } from 'react'
import FriendItem from './FriendItem'
import './index.scss'
import { connect } from 'react-redux';
import {selectUser} from './actions'

class FriendLists extends Component {
  constructor(){
    super()
    this.state = {
      selectItem: 0
    }
  }
  shouldComponentUpdate(nextProps){
    //默认选中第一个
    if(nextProps.friendList.length){
       this.props.selectUser(nextProps.friendList[0])
    }
    return true
  }
  selectCurrentUser= (index) => {
     this.props.selectUser(this.props.friendList[index])
  }
  render() {
    return (
       <ul className="friends">
          {this.props.friendList.map((item,index)=>{
            return <FriendItem key={index} 
                               item={item} 
                               currIndex={index}
                               active={index===this.state.selectItem}
                               selectCurrentUser={this.selectCurrentUser}/>
          })}
       </ul>
    )
  }
}
const mapStateToProps = (state) => {
   return {
     friendList: state.friendListReducer
   }
}

export default connect(mapStateToProps,{selectUser})(FriendLists)