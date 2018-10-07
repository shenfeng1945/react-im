import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { sendTextMessage } from './actions'
import { createNotifi } from '../common/notification'

class SendMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  sendMessage = (e) => {
    e.preventDefault()
    if(!this.props.friendList.length){
      createNotifi('暂无好友，发送无效!','error')
      this.setState({text: ''})
      return ;
    }
    if (this.state.text === '') {
      createNotifi('消息不可为空', 'warn')
      return;
    }
    const data = {
      text: this.state.text,
      to: this.props.name
    }
    this.props.sendTextMessage(data).then(_ => {
      // 发送成功，清空textarea
      this.setState({ text: '' })
    })
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.ctrlKey) {
      e.preventDefault()
      this.sendMessage(e)
    } else if (e.keyCode === 13 && e.ctrlKey) {
      this.setState({ text: this.state.text + '\n' })
    }
  }
  render() {
    return (
      <form className="sendMessage" onSubmit={this.sendMessage} onKeyDown={this.handleKeyDown}>
        <textarea cols="30" rows="10"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="输入消息 Enter发送"></textarea>
        <button className="ui button primary send" type="submit" disabled={this.props.friendList.length === 0}>Send</button>
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.selectFriendReducer.name,
    friendList: state.friendListReducer
  }
}
export default connect(mapStateToProps, { sendTextMessage })(SendMessage)
