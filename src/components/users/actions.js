import {AUTHORIZATION} from './actionTypes'
import { deleteCookie } from '../../utils/authorization'
const WebIM = window.WebIM;
export const Logout = () => {
    WebIM.conn.close();
    // deleteCookie('token');
    return {
        type: AUTHORIZATION,
        isAuthorization: true
    }
}
