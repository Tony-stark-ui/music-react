import {createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//applyMiddleware合并多个中间件(thunk) 用于支持异步action
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store
