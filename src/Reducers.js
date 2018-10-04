import {combineReducers} from 'redux'
import {loginReducer} from './components/login'
import userReducer from './components/users/reducer'
import friendsReducer from './components/friends/reducer'

import './utils/initSDK'

export default combineReducers({
    loginReducer,
    userReducer,
    friendsReducer
})