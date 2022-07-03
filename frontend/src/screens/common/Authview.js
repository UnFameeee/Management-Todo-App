import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../Login/Login'
function AuthView({authRoute}) {
 let body = (
    <div>
        {authRoute ==="login" && <Login />}
    </div>
 )
  return (
    <div>{body}</div>
  )
}

export default AuthView