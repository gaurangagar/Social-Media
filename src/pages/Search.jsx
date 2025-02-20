import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const Search = () => {

  const {userData,setuserData}=useContext(AuthContext)
  console.log(userData)

  return (
    <div>
      {userData.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </div>
  )
}

export default Search