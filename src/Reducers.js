import {combineReducers} from 'redux'
import {loginReducer} from './components/login'
import userReducer from './components/users/reducer'
import {friendListReducer,selectFriendReducer} from './components/friends/reducer'
import chatPanelReducer from './components/chatPanel/reducer'

import './utils/initSDK'

export default combineReducers({
    loginReducer,
    userReducer,
    friendListReducer,
    selectFriendReducer,
    chatPanelReducer
})