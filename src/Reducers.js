import {combineReducers} from 'redux'
import {loginReducer} from './components/login'
import userReducer from './components/users/reducer'

import './utils/initSDK'

export default combineReducers({
    loginReducer,
    userReducer
})