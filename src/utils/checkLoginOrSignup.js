export const checkLoginRequest = (data) => {
    const error = {}
    const { username, password } = data;
    if (username === '') {
        error.username = '用户名不可为空'
    }
    if (password === '') {
        error.password = '密码不可为空'
    }
    return error;
}

export const checkSignupRequest = (data) => {
    const error = {}
    const { username, password, conPassword } = data;
    if (username.length <= 4) {
        error.username = '用户名不得少于五位'
    } else if (username.length === 0) {
        error.username = '用户名不可为空'
    }
    if (password.length <= 5) {
        error.password = '密码不得少于六位'
    } else if (password.length === 0) {
        error.password = '密码不可为空'
    }
    if (conPassword === '') {
        error.conPassword = '确认密码不可为空'
    } else if (conPassword !== password) {
        error.conPassword = '前后两次密码有误'
    }
    return error;
}