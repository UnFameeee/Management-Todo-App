import axios from'axios'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authSlice'
import { apiUrl } from '../common/constant';

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