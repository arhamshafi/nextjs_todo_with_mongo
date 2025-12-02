"use client"
import React from 'react'

function Login() {
    return (
        <form className='w-[600px] bg-white rounded-2xl mt-20 h-max py-10 flex justify-center items-center flex-col'>
            <input type='text' className='outline-none shadow-2xs w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 ' placeholder='E-mail Here ' />
            <input type='password' className='outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 text-sm rounded-xl bg-gray-200 ' placeholder='Password Here' />
            <button className='w-[80%] bg-amber-950 rounded-xl text-white mt-10 h-12 cursor-pointer transition-all duration-150 ease-linear hover:tracking-[3px] active:scale-99 text-md '>LOGIN</button>
        </form>
    )
}

export default Login
