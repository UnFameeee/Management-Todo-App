import {
    apiUrl,
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_FAIL,
    REQUEST_REGISTER_ACCOUNT,
    REGISTER_ACCOUNT_FAIL,
    REGISTER_ACCOUNT_SUCCESS
}
from '../../common/constant'
import axios from 'axios'

export const loginAccountAction = (email, password) => async (dispatch) =>{
    console.log(email, password)
    try{
        dispatch({
            type:REQUEST_LOGIN_ACCOUNT
        })
        const {data} = await axios.post(`${apiUrl}/login`,{email,password})
        console.log(data)
        if(data){
            localStorage.setItem('AuthData',data)
            dispatch({
                type:LOGIN_ACCOUNT_SUCCESS,
                payload:data
            })
        }
        else{
            dispatch({
                type: LOGIN_ACCOUNT_FAIL
            })
        }

    }
    catch(error){
        console.log(error)
        dispatch({
            type: LOGIN_ACCOUNT_FAIL
        })
    }
}

export const registerAccountAction = (email,username,password) => async(dispatch) =>{
    try{
        dispatch({
            type:REQUEST_REGISTER_ACCOUNT
        })
        const config = {
            headers: {
                'content-type' : 'application/json',
            }
        }
        const {data} = await axios.post(`${apiUrl}/register`,{email,username,password},config)
        console.log(data)
        if(data){
            dispatch({
                type:REGISTER_ACCOUNT_SUCCESS
            })
        }
        else{
            dispatch({
                type:REGISTER_ACCOUNT_FAIL
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type:REGISTER_ACCOUNT_FAIL,
            payload: "Tài Khoản hoặc mật khẩu không đúng, vui lòng nhập lại"
        })

    }
}
