import axios from 'axios'
import {url} from '../../utils/constants'
const DoSignup = (data) => {
    return new Promise((resolve, reject) => {
        const { username, password } = data;
        const options = {
            username,
            password,
            nickname: username,
            appKey: window.WebIM.config.appkey,
            apiUrl: window.WebIM.config.apiURL,
            success: (e) => { resolve(e)},
            error: (e) => { reject(e)}
        }
        window.WebIM.conn.registerUser(options);
    })
}

export const SignUpAction = (data) => {
    return dispatch => (
        DoSignup(data)
    )
}

export const SignUpPost = (data) => {
    return dispatch => {
      return axios.post(`${url}/api/users/signup`,data)
    }
}

