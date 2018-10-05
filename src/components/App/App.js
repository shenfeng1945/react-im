import React, { Component } from 'react';
import Users from '../users'
import Search from '../search'
import './app.scss'
import FriendLists from '../friends';
import SendMessage from '../sendMessage';
import { connect } from 'react-redux'
import { initSDK } from './actions'
import Dialog from '../common/dialog'
import ChatPanel from '../chatPanel'
import ChatUser from '../chatUser'

class App extends Component {
  componentDidMount() {
    this.props.initSDK()
  }

  render() {
    return (
      <div className="app">
        <Users />
        <div className="left-side">
          <Search />
          <FriendLists />
        </div>
        <ChatPanel />
        <ChatUser />
        <SendMessage />
        <Dialog />
      </div>
    );
  }
}
export default connect(null, { initSDK })(App);
