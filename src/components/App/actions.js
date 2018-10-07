import {getFriendList} from '../friends/actions'
import eventEmitter from '../../utils/event'
import {getMessage} from '../chatPanel/actions'
import {changeRostersWithMsg} from '../friends/actions'
import {onError} from '../users/actions'
import {createNotifi} from '../common/notification'
import {getCookie} from '../../utils/authorization'
const WebIM = window.WebIM
const handleMessage = (message) => {
    return (dispatch,getState) => {
       // 收到消息时，设置发消息人的头像
       const friendList = getState().friendListReducer
       friendList.forEach(item=>{
           if(item.name === message.from){
               message.avatar = item.avatar
           }
       })
       dispatch(getMessage(message))
       dispatch(changeRostersWithMsg(message))
    }
}
export const initSDK = () => {
    return dispatch => {
        WebIM.conn.listen({
            onOpened: () => {
                dispatch(getFriendList())
                createNotifi('连接成功!','success')
            },
            onRoster: () => {
                console.log('onRoster')
                dispatch(getFriendList())
            },
            onPresence: (message) => {
                console.log('onPre')
                eventEmitter.emit('presence', message)
            },
            onTextMessage: (message) => {
                dispatch(handleMessage(message));
                console.log('i get success message')
            },
            onError: () => {
                if(getCookie()){
                   dispatch(onError())
                   createNotifi('连接失败，请重新登录','error')
                }
            }
        })
    }
    
}
