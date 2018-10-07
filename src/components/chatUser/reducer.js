import {TOGGLE_LEFTSIDE} from './actionTypes'
const initialState = {
    isShowLeftSide: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_LEFTSIDE:
    return {
        isShowLeftSide: action.isShowLeftSide
    }
  default:
    return state
  }
}
