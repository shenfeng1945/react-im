import React, { Component } from 'react'
import { USER_NAME } from '../../utils/constants'
import { getLocal } from '../../utils/localStorage'
import classNames from 'classnames'

export default class MessageItem extends Component {
  render() {
    const { from, value, avatar } = this.props.messageList
    const name = getLocal(USER_NAME)
    const noAvatarClass = name === from ? 'no-avatar-u' : 'no-avatar-f'
    const firstName = from.charAt(0).toUpperCase()
    const noAvatar = (
      <div className={noAvatarClass}>
        {firstName}
      </div>
    )
    const haveAvatar = (
      <div className="avatar">
          <img src={avatar} alt="" />
      </div>
    )
    return (
      <li className={classNames({ 'user': name === from })}>
          {
            avatar ?
            haveAvatar :
            noAvatar
          }
        <p className="showMsg">{value}</p>
      </li>
    )
  }
}
