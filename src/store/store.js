import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './modules'

const configureStore = (reducers = {}) => createStore(

  combineReducers({
    ...rootReducers,
    ...reducers,
  }),
  composeWithDevTools(),

)

export default configureStore
