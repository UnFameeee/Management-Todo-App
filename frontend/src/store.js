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

import {
    adminAddTaskAction,
    getAllTasksNotAssingedAction,
}
from './behaviors/actions/admin'

import {
    adminAddTaskReducer,
    getAllTasksNotAssingedReducer,
    
}
from './behaviors/reducers/admin'

const reducers = combineReducers({
    loginAccountReducer,
    registerAccountReducer,
    adminAddTaskReducer,
    getAllTasksNotAssingedReducer,
})

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store