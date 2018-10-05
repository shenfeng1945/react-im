import { SEND_TEXT_MSG, GET_TEXT_MSG } from './actionTypes'

export const addMessage = (message) => {
    console.log(message,'add')
    return {
        type: SEND_TEXT_MSG,
        message,
    }
}
export const getMessage = (message) => {
    console.log(message,'get')
    return {
        type: GET_TEXT_MSG,
        message,
    }
}



