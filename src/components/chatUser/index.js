import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux';
import {toggleLeftSide} from './actions'

class ChatUser extends Component {
   constructor(){
     super()
     this.state = {
       showLeftSide: false
     }
   }
  toggleLeftSide = () => {
    this.props.toggleLeftSide(!this.state.showLeftSide)
    this.setState({showLeftSide: !this.state.showLeftSide})
  }
  componentWillUnmount(){
    this.toggleLeftSide()
  }
  render() {
    return (
      <h1 className="chatUser">
         <svg className="icon menu" onClick={this.toggleLeftSide}>
           <use xlinkHref="#icon-menu"></use>
         </svg>
         {this.props.name} 
      </h1>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.selectFriendReducer.name
  }
}
export default connect(mapStateToProps,{toggleLeftSide})(ChatUser)