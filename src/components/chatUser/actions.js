import {TOGGLE_LEFTSIDE} from './actionTypes'
export const toggleLeftSide = (bool) => {
    return {
        type: TOGGLE_LEFTSIDE,
        isShowLeftSide: bool
    }
} 