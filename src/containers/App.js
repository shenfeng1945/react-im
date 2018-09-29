import React, { Component } from 'react';
import Users from '../components/users'
import Search from '../components/search'
import './app.scss'
import FriendLists from '../components/friends';
import SendMessage from '../components/sendMessage';
import { connect } from 'react-redux'
import { getFriendList } from '../components/friends/actions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friendList: []
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.getFriendList().then(res => {
        this.setState({ friendList: [...res] })
      }).catch(res => {
        console.log(res, 'error')
      })
    }, 1000)
  }

  render() {
    return (
      <div className="app">
        <Users />
        <div className="left-side">
          <Search />
          <FriendLists friendList={this.state.friendList} />
        </div>
        <SendMessage />
      </div>
    );
  }
}

export default connect(null, { getFriendList })(App);
