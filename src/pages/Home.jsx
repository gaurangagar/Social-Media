import React from 'react'
import Postcard from '../components/Postcard'

const Home = () => {
  return (
    <div className=''>
      <div className='span items-center justify-content m-2 flex gap-1 grid grid-cols-3 gap-4 p-4'>
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