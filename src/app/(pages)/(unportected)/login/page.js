import Login from '@/component/Login'
import React from 'react'

function page() {
  return (
    <div className='text-2xl flex-col font-bold py-5 text-center bg-amber-950 flex items-center min-h-screen '>
      <p className='text-white mt-16 ' >Login Your Account</p>
      <Login/>
    </div>
  )
}

export default page
