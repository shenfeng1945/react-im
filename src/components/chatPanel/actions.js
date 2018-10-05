import { SEND_TEXT_MSG, GET_TEXT_MSG } from './actionTypes'

export const addMessage = (message) => {
    return {
        type: SEND_TEXT_MSG,
        message,
    }
}
export const getMessage = (message) => {
    return {
        type: GET_TEXT_MSG,
        message,
    }
}



