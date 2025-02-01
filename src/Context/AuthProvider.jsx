import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import { createContext } from 'react'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {

    const [userData,setuserData]=useState('')

    useEffect(() => {
        const data=getLocalStorage()
        setuserData(data)
    }, [])

  return (
    <AuthContext.Provider value={{userData,setuserData}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider