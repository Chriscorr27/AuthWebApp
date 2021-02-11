import {createStore , applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import cakeReduce from './cake/cakeReducer'

const store = createStore(cakeReduce,composeWithDevTools(applyMiddleware(logger)))
export default store