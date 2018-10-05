import {getFriendList} from '../friends/actions'
import eventEmitter from '../../utils/event'
import {getMessage} from '../chatPanel/actions'
import {changeRostersWithMsg} from '../friends/actions'
const WebIM = window.WebIM
const handleMessage = (message) => {
    return dispatch => {
       dispatch(getMessage(message))
       dispatch(changeRostersWithMsg(message))
    }
}
export const initSDK = () => {
    return dispatch => {
        WebIM.conn.listen({
            onOpened: () => {
                dispatch(getFriendList())
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
        })
    }
    
}
