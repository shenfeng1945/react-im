import {combineReducers} from 'redux'
import {loginReducer} from './components/login'
import {userReducer,userAvatarReducer} from './components/users/reducer'
import {friendListReducer,selectFriendReducer} from './components/friends/reducer'
import chatPanelReducer from './components/chatPanel/reducer'
import chatUserReducer from './components/chatUser/reducer'

import './utils/initSDK'

export default combineReducers({
    loginReducer,
    userReducer,
    userAvatarReducer,
    friendListReducer,
    selectFriendReducer,
    chatPanelReducer,
    chatUserReducer
})