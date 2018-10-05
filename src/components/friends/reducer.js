import { FRIEND_LIST, SELECT_USER } from './actionTypes'


export const friendListReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FRIEND_LIST:
      return [
          ...action.payload.rosters
        ]
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

