import axios from 'axios'
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
        console.log(username,password)
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
      return axios.post('/api/users/signup',data)
    }
}

