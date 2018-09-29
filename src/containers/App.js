import React, { Component } from 'react';
import Users from '../components/users'
import Search from '../components/search'
import './app.scss'
import FriendLists from '../components/friends';
import SendMessage from '../components/sendMessage';
import {addCallback} from './actions'
import {connect} from 'react-redux'

class App extends Component {
  componentWillMount(){
      this.props.addCallback()
  }
  render() {
    return (
      <div className="app">
         <Users />
         <div className="left-side">
           <Search />
           <FriendLists />
         </div>
         <SendMessage />
      </div>
    );
  }
}

export default connect(null,{addCallback})(App);
