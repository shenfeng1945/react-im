import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageItem from './MessageItem'

class ChatPanel extends Component {
  render() {
    const { name, chatMsgList } = this.props
    if (chatMsgList[name]) {
      return (
        <ul className="chatPanel">
          {chatMsgList[name].map(item => {
            return <MessageItem key={item.id} messageList={item} />
          })}
        </ul>
      )
    }else{
      return null
    }
  }
}
const mapStateToProps = state => {
  return {
    chatMsgList: state.chatPanelReducer.msgList,
    name: state.selectFriendReducer.name
  }
}
export default connect(mapStateToProps)(ChatPanel)
