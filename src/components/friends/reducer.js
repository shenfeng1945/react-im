import { FRIEND_LIST, SELECT_USER, FRIEND_AVATAR } from './actionTypes'


export const friendListReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FRIEND_LIST:
      return [
        ...action.payload.rosters
      ]
    case FRIEND_AVATAR:
      let newState = Object.assign([], state)
      newState.map(item => {
        if (item.name === action.data.name) {
          item.avatar = action.data.avatar
        }
        return item
      })
      return newState
    default:
      return state
  }
}

export const selectFriendReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SELECT_USER:
      return {
        name: action.name,
      }
    default:
      return state
  }
}

