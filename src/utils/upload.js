import {url} from './constants'
const dataURItoBlob = (dataURI) => {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
}
const upload = (formData) => {
    return new Promise((resolve, reject) => {
        const url1 = `${url}/api/users/avatar`
        const request = new XMLHttpRequest();
        request.open('post', url1)
        request.send(formData);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 400) {
                    resolve();
                } else {
                    reject();
                }
            }
        }
    })
}
export const uploadImg = (dataURI,name) => {
    const blob = dataURItoBlob(dataURI)
    let formData = new FormData()
    formData.append('avatar', blob, 'avatar' + new Date().getTime() + '.jpg')
    formData.append('username',name)
    return upload(formData)
}