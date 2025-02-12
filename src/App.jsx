import { useState,useContext,useEffect } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { setLocalStorage  } from './utils/LocalStorage.jsx'
import { AuthContext } from './Context/AuthProvider.jsx'

function App() {
  useEffect(() => {
    setLocalStorage()
  }, [])

  const [user,setUser]=useState('')

  const {userData,setuserData}=useContext(AuthContext)
  console.log(userData)

  const handleLogin=(email,password)=>{
    setUser('user')
  }

  return (
    <div className='overflow-x-hidden'>
      {user=='' ? <Login handleLogin={handleLogin}/> : null}
      {user=='user' ? <Home/> : null}
    </div>
  )
}

export default App
