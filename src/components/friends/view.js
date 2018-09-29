import React, { Component } from 'react'
import FriendItem from './FriendItem'
import './index.scss'
import { connect } from 'react-redux';
import {getFriendList} from './actions'

class FriendLists extends Component {
//   componentWillMount(){
//       this.props.getFriendList().then(res=>{
//           console.log(res,'lists')
//       }).catch(error=>{
//           console.log(error,'error11')
//       })
//   }
  render() {
    return (
       <ul className="friends">
           <FriendItem />
           <FriendItem />
           <li onClick={this.props.getFriendList}>hello</li>
       </ul>
    )
  }
}

export default connect(null,{getFriendList})(FriendLists)