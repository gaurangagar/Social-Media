import React from 'react'
import Postcard from '../components/Postcard'

const Home = () => {
  return (
    <div>
      <div className='span items-center justify-content p-2 m-2'>
        <Postcard/>
        <Postcard/>
        <Postcard/>
        <Postcard/>
      </div>
    </div>
  )
}

export default Home