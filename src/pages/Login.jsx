import React, { useContext } from 'react'
import { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`email is ${email} and password is ${password}`)
        handleLogin(email,password)
        
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex flex-col items-center justify-center border-2 border-green-500 p-20 borrder-rounded-lg'>
            <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder='Enter your email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-green-400 p-2 rounded-2xl text-white placeholder-amber-200'
                />
                <br />
                <input 
                    type="password"
                    placeholder='Enter your password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border border-green-400 p-2 rounded-2xl text-white mt-2 placeholder-amber-200'
                />
                <br />
                <button 
                className=' text-red-300 px-4 py-2 rounded-lg text-lg font-semibold transition duration-200 hover:bg-amber-800 border-2 mt-2'
                >Login</button>
            </form>
        </div>
    )
}

export default Login