export const setCookie = (token) => {
    window.WebIM.utils.setCookie('token', token, 1)
}

export const getCookie = () => {
    let token
    const cookie = document.cookie.split(';')
    cookie.forEach(item=>{
        if(item.split('=')[0] === 'token'){
           token = item.split('=')[1] 
        }
    })
    return token;
}

export const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}