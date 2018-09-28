import React, { Component } from 'react'

export default class FriendItem extends Component {
    render() {
        return (
            <li>
                <div className="avatar">
                    <img src="./user.jpg" alt="React" />
                </div>
                <div className="friend">
                    <div className="name">React</div>
                    <div className="lastMsg">Hello World!</div>
                </div>
            </li>
        )
    }
}
