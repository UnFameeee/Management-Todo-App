import {
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_FAIL,
    REQUEST_REGISTER_ACCOUNT,
    REGISTER_ACCOUNT_SUCCESS,
    REGISTER_ACCOUNT_FAIL
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