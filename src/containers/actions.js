import {getFriendList} from '../components/friends/actions'
const WebIM = window.WebIM

export const addCallback = () => {
   return dispatch => {
      WebIM.conn.listen({
          onRoster: () => {
             return dispatch(getFriendList())
          }
      })
   }
}
