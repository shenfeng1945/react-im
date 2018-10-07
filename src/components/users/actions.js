import {AUTHORIZATION,USER_AVATAR} from './actionTypes'
import {url} from '../../utils/constants'
import axios from 'axios'

export const onError = () => {
    return {
        type: AUTHORIZATION,
        isAuthorization: false
    }
}

export const getAvatar = (name) => {
    return dispatch => {
      return axios.get(`${url}/api/users/avatar/${name}`)
    }
}

export const setUserAvatar = (url) => {
    return {
        type: USER_AVATAR ,
        userAvatar:  url
    }
}