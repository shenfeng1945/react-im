import { FRIEND_LIST, SELECT_USER ,FRIEND_AVATAR} from './actionTypes'
import {createAction} from '../../utils/createAction'
const setRosters = createAction(FRIEND_LIST,'rosters')
const WebIM = window.WebIM;

export const getFriendList = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            WebIM.conn.getRoster({
                success: (roster) => {
                    dispatch(setRosters(roster))
                    resolve(roster)
                },
                error: (e) => {
                    reject(e)
                }
            })
        })
    }
}
export const selectUser = ({name}) => {
    return {
       type: SELECT_USER,
       name
    }
}

export const changeRostersWithMsg = (message) => {
    return (dispatch,getState) => {
        let name,recentMsg
        if(message.body){
           // 消息发送成功
           name= message.body.to
           recentMsg = message.value
        }else{
           // 消息回调
           name= message.from;
           recentMsg = message.data
        }
        let oldRosters = getState().friendListReducer
        const newRosters = oldRosters.map(roster=>{
            let newRoster = {...roster}
            if(roster.name === name){
                newRoster.recentMsg = recentMsg
            }
            return newRoster
        })
        dispatch(setRosters(newRosters))
    }
}

export const setFriendAvatar = (data) => {
   return {
       type: FRIEND_AVATAR,
       data
   }
}
