import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const Header = () => {

  const {userData,setuserData}=useContext(AuthContext)
    console.log(userData)

  return (
    <div className='border-b-2 flex justify-between'>
        <nav className="flex justify-between items-center w-[50%]">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <button
          onClick={() => {
            
            localStorage.removeItem('loggedinuser');
          }}
        >LogOut</button>
    </div>
  )
}

export default Header