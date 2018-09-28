import React, { Component } from 'react';
import Users from '../components/users'
import Search from '../components/search'
import './app.scss'
import FriendLists from '../components/friends';
import SendMessage from '../components/sendMessage';

class App extends Component {
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

export default App;
