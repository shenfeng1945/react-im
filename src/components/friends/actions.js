import { FRIEND_LIST } from './actionTypes'
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