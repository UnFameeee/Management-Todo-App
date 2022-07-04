import axios from'axios'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authSlice'
import { apiUrl } from '../common/constant';
import { getTasksFailed, getTasksStart, getTasksSuccess, updateTaskFailed, updateTaskStart, updateTaskSuccess, updateTaskUserOwnerFailed, updateTaskUserOwnerStart, updateTaskUserOwnerSuccess } from './taskSlice';

export const loginUser = async(user,dispatch,navigate) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post(`${apiUrl}/user/login`,user)
        const {data} = await axios.post(`${apiUrl}/user/login`,user)
        console.log(data)
        
        dispatch(loginSuccess(res.data))
        navigate("/forbiden")
    }
    catch(err){
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch,navigate) =>{
    console.log(user)
    dispatch(registerStart())
    try{
        const config = {
            headers: {
                'content-type' : 'application/json; charset=utf-8',
            }
        }
        await axios.post(`${apiUrl}/user/register`,user,config)
        dispatch(registerSuccess())
        navigate("/forbiden")
    }
    catch(err){
        dispatch(registerFailed())
    }
}

export const getAllTasks = async (accessToken,taskId,dispatch) =>{
    dispatch(getTasksStart())
    try{
        const config = {
            headers: {
                'content-type' : 'application/json; charset=utf-8',
                'token':`Bearer ${accessToken}`
            }
        }
        await axios.get(`${apiUrl}/task/view/${taskId}`,config)
        const res = await axios.get(`${apiUrl}/task/view/${taskId}`,config)
        console.log(res.data)
        dispatch(getTasksSuccess())
    }
    catch(err){
        dispatch(getTasksFailed())
    }
}

export const updateTask = async (accessToken,taskInfo,taskId,dispatch) =>{
    dispatch(updateTaskStart())
    try{
        const config = {
            headers: {
                'content-type' : 'application/json; charset=utf-8',
                'token':`Bearer ${accessToken}`
            }
        }
        await axios.put(`${apiUrl}/task/update/${taskId}`,taskInfo,config)
        const res = await axios.put(`${apiUrl}/task/update/${taskId}`,taskInfo,config)
        console.log(res.data)
        dispatch(updateTaskSuccess())
    }
    catch(err){
        dispatch(updateTaskFailed())
    }
}

export const updateTaskUserOwner = async (accessToken,userId,taskId,dispatch) =>{
    console.log(userId,taskId)
    dispatch(updateTaskUserOwnerStart())
    try{
        const config = {
            headers: {
                'content-type' : 'application/json; charset=utf-8',
                'token':`Bearer ${accessToken}`
            }
        }
        await axios.put(`${apiUrl}/task/update/${taskId}/user`,userId,config)
        const res = await axios.put(`${apiUrl}/task/update/${taskId}/user`,userId,config)
        console.log(res.data)
        dispatch(updateTaskUserOwnerSuccess())
    }
    catch(err){
        dispatch(updateTaskUserOwnerFailed())
    }
}
