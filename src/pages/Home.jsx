import React from 'react'
import Postcard from '../components/Postcard'

const Home = () => {

  

  return (
    <div className=''>
      <div className='span items-end justify-content m-2 gap-4 grid grid-cols-3 p-4'>
        <Postcard/>
        <Postcard/>
        <Postcard/>
        <Postcard/>
        <Postcard/>
        <Postcard/>
        <Postcard/>
        <Postcard/>
      </div>
    </div>
  )
}

export default Home