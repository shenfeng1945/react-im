import React, { Component } from 'react'

export default class MessageItem extends Component {
  render() {
    const {from,value} = this.props.messageList
    return (
      <li>
          <p>{from}</p>
          <p>{value}</p>
      </li>
    )
  }
}
