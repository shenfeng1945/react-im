
const WebIM = window.WebIM;
const getLists = () => {
   return new Promise((resolve,reject) => {
    WebIM.conn.getRoster({
        success: (roster) => {
            resolve(roster)
        },
        error: (e) => {
            reject(e)
        }
    })
   })
    
}
export const getFriendList = () => {
   return dispatch => {
       return getLists()
   }
}