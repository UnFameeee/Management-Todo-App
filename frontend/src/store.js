import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux"
import {
    loginAccountAction,
    registerAccountAction
}
from './behaviors/actions/user'
import {
    loginAccountReducer,
    registerAccountReducer
    
}
from './behaviors/reducers/user'

const reducers = combineReducers({
    loginAccountReducer,
    registerAccountReducer
})

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store