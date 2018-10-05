import { getLocal } from '../../utils/localStorage'
import { USER_NAME } from '../../utils/constants'
import { changeRostersWithMsg } from '../friends/actions'
import { addMessage } from '../chatPanel/actions'
const WebIM = window.WebIM;
const handleMessage = (message) => {
    return dispatch => {
        dispatch(addMessage(message))
        dispatch(changeRostersWithMsg(message))
    }
}
export const sendTextMessage = ({ to, text }) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            var id = WebIM.conn.getUniqueId();                 // 生成本地消息id
            var msg = new WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: text,                  // 消息内容
                to,                          // 接收消息对象（用户id）
                roomType: false,
                success: function () {
                    msg.from = getLocal(USER_NAME)
                    msg.to = to
                    dispatch(handleMessage(msg))
                    resolve()
                },
                fail: function (e) {
                    reject(e)
                }
            });
            msg.body.chatType = 'singleChat';
            WebIM.conn.send(msg.body);
        })
    }
}

