import {getFriendList} from '../friends/actions'
import eventEmitter from '../../utils/event'

const WebIM = window.WebIM
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
            onTextMessage: () => {
            },
        })
    }
    
}
