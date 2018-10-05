import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { sendTextMessage } from './actions'

class SendMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  sendMessage = (e) => {
    e.preventDefault()
    const data = {
      text: this.state.text,
      to: this.props.name
    }
    this.props.sendTextMessage(data).then(_ =>{
       // 发送成功，清空textarea
       this.setState({text:''})
    })
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  render() {
    return (
      <form className="sendMessage" onSubmit={this.sendMessage}>
        <textarea cols="30" rows="10"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="输入消息"></textarea>
        <button className="ui button primary send" type="submit">Send</button>
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.selectFriendReducer.name
  }
}
export default connect(mapStateToProps, { sendTextMessage })(SendMessage)
