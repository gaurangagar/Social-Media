import { useState,useContext,useEffect } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { setLocalStorage  } from './utils/LocalStorage.jsx'
import { AuthContext } from './Context/AuthProvider.jsx'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'
import Header from './components/Header.jsx'
import { Navigate } from 'react-router-dom'

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<><Header/><Home/></>
    },
    {
      path:'/Search',
      element:<><Header/><Search/></>
    },
    {
      path:'/profile',
      element:<><Header/><Profile/></>
    }
  ])

  useEffect(() => {
    setLocalStorage()
  }, [])

  const [user,setUser]=useState('')

  const {userData,setuserData}=useContext(AuthContext)

  const handleLogin=(email,password)=>{
    setUser('user')
    localStorage.setItem('loggedinuser',JSON.stringify({email,password}));
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedinuser");
    if(loggedIn) {
      setUser('user')
    }

  }, []);

  return (
    <div className='overflow-x-hidden'>
      {/* <Header /> */}
      
      {user=='' ? <Login handleLogin={handleLogin}/> : null}
      {user=='user' ? <RouterProvider router={router}/> : null}
    </div>
  )
}

export default App
