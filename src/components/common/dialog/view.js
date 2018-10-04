import React, { Component } from 'react'
import './index.scss'
import eventEmitter from '../../../utils/event'
import classNames from 'classnames'
class Dialog extends Component {
    constructor(){
        super()
        this.state = {
           isShow: false,
           message: {}
        }
    }
    onCancel = () => {
        const {message }= this.state;
        window.WebIM.conn.unsubscribed({
            to: message.from,
            message : 'rejectAddFriend'
        });
        this.setState({isShow:false})
    }
    onAgree = () => {
        const {message }= this.state;
        window.WebIM.conn.subscribed({
            to: message.from,
            message : '[resp:true]'
        });
        this.setState({isShow:false})
    }
    componentWillMount(){
        eventEmitter.on('presence', this.handlePresence);
    }
    handlePresence = (message) => {
        if (message.type === 'subscribe') {
            this.setState({isShow:true,message})
        }
    }
    handleClose = () => {
        this.setState({isShow:false})
    }
    render() {
        return (
            <div className={classNames('createFolder-Wrapper',{active:this.state.isShow})}>
                <div className="createFolder clearfix">
                    <h3>好友申请</h3>
                    <div className="msg">
                      <p>{this.state.message.from}邀请你加为好友</p>
                      <p>留言: {this.state.message.status}</p>
                    </div>
                    <div className="createActions">
                        <button className="btn btn-cancel" onClick={this.onCancel}>拒绝</button>
                        <button className="btn btn-enter" onClick={this.onAgree}>同意</button>
                    </div>
                    <svg className="icon-24 close" onClick={this.handleClose}>
                        <use xlinkHref="#icon-close"></use>
                    </svg>
                </div>
            </div>
        )
    }
}
export default Dialog;
