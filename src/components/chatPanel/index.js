import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageItem from './MessageItem'
import './index.scss'

class ChatPanel extends Component {
  constructor(){
    super()
    this.Chatlist = React.createRef()
  }
  componentWillUpdate(){
    // 控制内容是否滑到最底部
    const node = this.Chatlist.current
    if(node){
       this.shouldScrollToBottom = (node.scrollTop + node.clientHeight + 200) >= node.scrollHeight
    }
  }
  componentDidUpdate(){
    const node = this.Chatlist.current
    if(node && this.shouldScrollToBottom){
      node.scrollTop = node.scrollHeight
    }
  }
  render() {
    const { name, chatMsgList } = this.props
    if (chatMsgList[name]) {
      return (
        <ul className="chatPanel" ref={this.Chatlist}>
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
