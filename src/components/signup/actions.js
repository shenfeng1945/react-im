const DoSignup = (data) => {
    return new Promise((resolve, reject) => {
        const { username, password } = data;
        const options = {
            username,
            password,
            nickname: username,
            appKey: WebIM.config.appkey,
            success: (e) => { resolve(e) },
            error: (e) => { reject(e) }
        }
        WebIM.conn.registerUser(options);
    })
}

export const SignUpAction = (data) => {
    return dispatch => (
        DoSignup(data)
    )
}

