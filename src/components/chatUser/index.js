import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux';

class ChatUser extends Component {
  render() {
    return (
      <h1 className="chatUser">
         {this.props.name} 
      </h1>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.selectFriendReducer.name
  }
}
export default connect(mapStateToProps)(ChatUser)