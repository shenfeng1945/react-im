import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'
import {logger} from 'redux-logger'


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
)
export default store;