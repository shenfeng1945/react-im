import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'
import {logger} from 'redux-logger'
import {getCookie} from './utils/authorization'
import {setCurrentUser} from './components/login/actions'
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
)
const token = getCookie()
if(token){
    setCurrentUser(token)
}

export default store;