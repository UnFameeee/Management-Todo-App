import {
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_FAIL,
    REQUEST_REGISTER_ACCOUNT,
    REGISTER_ACCOUNT_SUCCESS,
    REGISTER_ACCOUNT_FAIL,
    REQUEST_GET_TASK_INFOS,
    GET_TASK_INFOS_SUCCESS,
    GET_TASK_INFOS_FAIL,

}
from '../../common/constant'

export const loginAccountReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_LOGIN_ACCOUNT:
            return {loadingLoginAccount: true}
        case LOGIN_ACCOUNT_SUCCESS:
            return {loadingLoginAccount:false, success: true, token: action.payload}
        case LOGIN_ACCOUNT_FAIL:
            return {loadingLoginAccount: false, success: false}
        default:
            return state
    }
}

export const registerAccountReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_REGISTER_ACCOUNT:
            return {loadingRegisterAccount: true}
        case REGISTER_ACCOUNT_SUCCESS:
            return {loadingRegisterAccount:false, success:true}
        case REGISTER_ACCOUNT_FAIL:
            return {loadingRegisterAccount:false, success:false, error:action.payload}
        default:
            return state
    }
}

export const getTaskInfosAction = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_TASK_INFOS:
            return {loadingRegisterAccount: true}
        case GET_TASK_INFOS_SUCCESS:
            return {loadingRegisterAccount:false, success:true, message: action.payload}
        case GET_TASK_INFOS_FAIL:
            return {loadingRegisterAccount:false, success:false}
        default:
            return state
    }
}