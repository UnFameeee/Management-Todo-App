import {
    apiUrl,
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
import axios from 'axios'
import { alertSuccess } from '../../common/libs'

export const adminAddTaskAction = (title, description) => async (dispatch) => {
    try{
        dispatch({
            type:ADMIN_REQUEST_ADD_TASK
        })

        const config = {
            headers: {
                'content-type' : 'application/json',
            }
        }

        const {data} = await axios.post(`${apiUrl}/task/create`, {title,description}, config)

        dispatch({
            type:ADMIN_ADD_TASK_SUCCESS,
            payload:data
        })      

    }
    catch(error){
        console.log(error)
        dispatch({
            type: ADMIN_ADD_TASK_FAIL
        })
    }
}

export const adminAssignTaskAction = (userId, username, taskid) => async (dispatch) => {
    try{
        dispatch({
            type:REQUEST_ADMIN_ASSIGN_TASK
        })
        
        const config = {
            headers: {
                'content-type' : 'application/json',
            }
        }

        const {data} = await axios.put(`${apiUrl}/task/update/${taskid}/user`, {userId}, config)

        if(data)
          alertSuccess(`Assign Task`, `To ${username} Successfully`, 'home')

        dispatch({
            type:ADMIN_ASSIGN_TASK_SUCCESS,
            payload:data
        })      

    }
    catch(error){
        console.log(error)
        dispatch({
            type: ADMIN_ASSIGN_TASK_FAIL
        })
    }
}

export const getAllTasksNotAssingedAction = () => async (dispatch) => {
    try{
        dispatch({
            type:REQUEST_GET_ALL_TASKS_NOT_ASSIGNED
        })

        const {data} = await axios.get(`${apiUrl}/task/newTasks`)

        if(data){
            dispatch({
                type:GET_ALL_TASKS_NOT_ASSIGNED_SUCCESS,
                payload:data
            })
        }
        else{
            dispatch({
                type:  GET_ALL_TASKS_NOT_ASSIGNED_FAIL
            })
        }

    }
    catch(error){
        console.log(error)
        dispatch({
            type:  GET_ALL_TASKS_NOT_ASSIGNED_FAIL
        })
    }
}

export const getAllTasksAssingedAction = () => async (dispatch) => {
    try{
        dispatch({
            type:REQUEST_GET_ALL_TASKS_ASSIGNED
        })

        const {data} = await axios.get(`${apiUrl}/user/viewTask`)

        if(data){
            dispatch({
                type:GET_ALL_TASKS_ASSIGNED_SUCCESS,
                payload:data
            })
        }
        else{
            dispatch({
                type:  GET_ALL_TASKS_ASSIGNED_FAIL
            })
        }

    }
    catch(error){
        console.log(error)
        dispatch({
            type:  GET_ALL_TASKS_ASSIGNED_FAIL
        })
    }
}