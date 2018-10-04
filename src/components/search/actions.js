import axios from "axios";
import {createNotifi} from '../common/notification'
const WebIM = window.WebIM
export const searchAction = (data) => {
    return dispatch => {
        return axios.post('/api/users/search', data)
    }
}
export const addRoster = (name) => {
    return dispatch => {
        WebIM.conn.subscribe({
            to: name,
            message: '加个好友呗!'
        })
        createNotifi('好友请求已发送')
    }
} 
