import React, { Component } from 'react'
import './index.scss'

export default class Users extends Component {
  render() {
    return (
      <div className="users">
         <div className="avatar">
            <img src="./test.jpg" alt=""/>
         </div> 
         <div className="username">
            shenfeng1945
         </div>
         <div className="logout">
            登出
         </div>
      </div>
    )
  }
}
