import { AUTHORIZATION , USER_AVATAR} from './actionTypes'
const initialState = {
  isAuthorization: true,
}

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTHORIZATION:
      return {
        isAuthorization: action.isAuthorization
      }
    default:
      return state
  }
}

export const userAvatarReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_AVATAR:
      return {
        userAvatar: action.userAvatar
      }
    default:
      return state
  }
}