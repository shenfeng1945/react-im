import {AUTHORIZATION} from './actionTypes'
const initialState = {
    isAuthorization: false,
}

const userReducer =  (state = initialState, action = {}) => {
  switch (action.type) {
  case AUTHORIZATION: 
    return {
        isAuthorization: action.isAuthorization
    }
  default:
    return state
  }
}

export default userReducer;