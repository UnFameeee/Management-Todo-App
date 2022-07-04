import {
    ADMIN_REQUEST_ADD_TASK,
    ADMIN_ADD_TASK_SUCCESS,
    ADMIN_ADD_TASK_FAIL,
    REQUEST_GET_ALL_TASKS_NOT_ASSIGNED,
    GET_ALL_TASKS_NOT_ASSIGNED_SUCCESS,
    GET_ALL_TASKS_NOT_ASSIGNED_FAIL,
    REQUEST_GET_ALL_TASKS_ASSIGNED,
    GET_ALL_TASKS_ASSIGNED_SUCCESS,
    GET_ALL_TASKS_ASSIGNED_FAIL,
}
from '../../common/constant'

export const adminAddTaskReducer = (state={}, action) => {
    switch(action.type){
        case ADMIN_REQUEST_ADD_TASK:
            return {loadingLoginAccount: true}
        case ADMIN_ADD_TASK_SUCCESS:
            return {loadingLoginAccount:false, success: true}
        case ADMIN_ADD_TASK_FAIL:
            return {loadingLoginAccount: false, success: false}
        default:
            return state
    }
}

export const getAllTasksNotAssingedReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ALL_TASKS_NOT_ASSIGNED:
            return {loadingGetAllTasksNotAssigned: true}
        case GET_ALL_TASKS_NOT_ASSIGNED_SUCCESS:
            return {loadingGetAllTasksNotAssigned: false, success: true, TasksNotAssigned: action.payload}
        case GET_ALL_TASKS_NOT_ASSIGNED_FAIL:
            return {loadingGetAllTasksNotAssigned: false, success: false}
        default:
            return state
    }
}

export const getAllTasksAssingedReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ALL_TASKS_ASSIGNED:
            return {loadingGetAllTasksAssigned: true}
        case GET_ALL_TASKS_ASSIGNED_SUCCESS:
            return {loadingGetAllTasksAssigned: false, getTaskSuccess: true, TasksAssigned: action.payload}
        case GET_ALL_TASKS_ASSIGNED_FAIL:
            return {loadingGetAllTasksAssigned: false, getTaskSuccess: false}
        default:
            return state
    }
}