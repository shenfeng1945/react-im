import { setCookie } from '@utils/authorization'
import { setLocal, getLocal } from '@utils/localStorage'
import { USER_NAME } from '@utils/constants'

const DoLogin = (data) => {
    return new Promise((resolve, reject) => {
        const user = data.username
        const pwd = data.password
        const options = {
            user,
            pwd,
            appKey: window.WebIM.config.appkey,
            apiUrl: window.WebIM.config.apiURL,
            success: (e) => { resolve(e); },
            error: () => { reject() }
        }
        window.WebIM.conn.open(options);
    })
}
const DoLoginByToken = (token) => {
    return new Promise((resolve, reject) => {
        const user = getLocal(USER_NAME);
        const accessToken = token;
        const options = {
            user,
            accessToken,
            appKey: window.WebIM.config.appkey,
            apiUrl: window.WebIM.config.apiURL,
            success: () => { resolve(),console.log('object') },
            error: (e) => { reject() ,console.log('object')}
        }
        window.WebIM.conn.open(options);
    })
}
export const LoginAction = (data) => {
    return dispatch => (
        DoLogin(data).then(res => {
            const token = res.access_token;
            const username = res.user.username
            setCookie(token)
            setLocal(USER_NAME, username)
            return true;
        })
    )
}

export const setCurrentUser = (token) => {
    return dispatch => {
        return DoLoginByToken(token)
    }
}
