import React, { Component } from 'react'
import './index.scss'

export default class SendMessage extends Component {
  render() {
    return (
      <form className="sendMessage">
         <textarea cols="30" rows="10"></textarea>
         <button className="ui button primary send" type="submit">Send</button>
      </form>
    )
  }
}
