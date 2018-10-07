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
import classNames from 'classnames'

class App extends Component {
  componentDidMount() {
    this.props.initSDK()
  }

  render() {
    return (
      <div className="app">
        <div className={classNames('left-side',{show: this.props.isShowLeftSide})}>
          <Users />
          <Search />
          <FriendLists />
        </div>
        <div className="right-side">
          <ChatPanel />
          <ChatUser />
          <SendMessage />
        </div>

        <Dialog />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isShowLeftSide: state.chatUserReducer.isShowLeftSide
  }
}
export default connect(mapStateToProps, { initSDK })(App);
