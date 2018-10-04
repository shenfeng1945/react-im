import {FRIEND_LIST} from './actionTypes'

export default (state = [], action = {}) => {
  switch (action.type) {
  case FRIEND_LIST:
    return [
      ...action.payload.rosters
    ]
  default:
    return state
  }
}
