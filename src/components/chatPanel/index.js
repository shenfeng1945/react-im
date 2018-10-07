import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MessageItem from './MessageItem'
import './index.scss'
import classNames from 'classnames'


class ChatPanel extends Component {
  constructor() {
    super()
    this.Chatlist = React.createRef()
  }
  componentWillUpdate() {
    // 控制内容是否滑到最底部
    const node = this.Chatlist.current
    if (node) {
      this.shouldScrollToBottom = (node.scrollTop + node.clientHeight + 200) >= node.scrollHeight
    }
  }
  componentDidUpdate() {
    const node = this.Chatlist.current
    if (node && this.shouldScrollToBottom) {
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
    } else {
      return (
        <ul className={classNames('chatPanel', { 'no-friend': !this.props.friendList.length })} ref={this.Chatlist}>
          {
            this.props.friendList.length === 0 ?
              <Fragment>
                <span>
                  <svg className="icon-48">
                    <use xlinkHref="#icon-zhishipai"></use>
                  </svg>
                  您暂无好友!
                </span>
                <span>
                  试试搜‘shenfeng’看看
                </span>
              </Fragment> :
              null
          }
        </ul>
      )
    }
  }
}
const mapStateToProps = state => {
  return {
    chatMsgList: state.chatPanelReducer.msgList,
    name: state.selectFriendReducer.name,
    friendList: state.friendListReducer
  }
}
export default connect(mapStateToProps)(ChatPanel)
