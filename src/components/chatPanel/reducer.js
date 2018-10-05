import { SEND_TEXT_MSG, GET_TEXT_MSG } from './actionTypes'
const initialState = {
  msgList: {}
}
// 发送成功后，修改列表
const addMsgListBySend = (msgList, message) => {
  const { from, value, id, to } = message
  let list = msgList[to] || []
  list.push({ to, from, value, id })
  msgList[to] = list
  return Object.assign({}, msgList)
}
// 有消息回调，修改列表
const addMsgListByGet = (msgList, message) => {
  const { from, data, id, to } = message
  let list = msgList[from] || []
  list.push({ to, from, value: data, id })
  msgList[from] = list
  return Object.assign({}, msgList)
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_TEXT_MSG:
      return {
        msgList: addMsgListBySend(state.msgList, action.message)
      }
    case GET_TEXT_MSG:
      return {
        msgList: addMsgListByGet(state.msgList, action.message)
      }
    default:
      return state
  }
}
