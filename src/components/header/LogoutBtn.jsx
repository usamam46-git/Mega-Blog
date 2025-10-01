import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

  return (
    <div onClick={logoutHandler}>
      <button>Logout</button>
    </div>
  )
}

export default LogoutBtn
