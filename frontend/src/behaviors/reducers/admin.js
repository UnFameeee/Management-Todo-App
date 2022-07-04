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
    REQUEST_ADMIN_ASSIGN_TASK,
    ADMIN_ASSIGN_TASK_SUCCESS,
    ADMIN_ASSIGN_TASK_FAIL,
}
from '../../common/constant'

export const adminAddTaskReducer = (state={}, action) => {
    switch(action.type){
        case ADMIN_REQUEST_ADD_TASK:
            return {loadingAddTask: true}
        case ADMIN_ADD_TASK_SUCCESS:
            return {loadingAddTask:false, success: true, message: action.payload.message}
        case ADMIN_ADD_TASK_FAIL:
            return {loadingAddTask: false, success: false}
        default:
            return state
    }
}

export const adminAssignTaskReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADMIN_ASSIGN_TASK:
            return {loadingAssignTask: true}
        case ADMIN_ASSIGN_TASK_SUCCESS:
            return {loadingAssignTask:false, success: true, message: action.payload.message}
        case ADMIN_ASSIGN_TASK_FAIL:
            return {loadingAssignTask: false, success: false}
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