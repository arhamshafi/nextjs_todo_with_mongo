import React from 'react'

function Signup() {
    return (
        <form className='w-[600px] bg-white rounded-2xl mt-20 h-max py-10 flex justify-center items-center flex-col'>
            <input type='text' className='outline-none shadow-2xs w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 ' placeholder='Your Name' />
            <input type='email' className='outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 ' placeholder='Your E-mail' />
            <input type='number' className='outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 ' placeholder='Phone Number ' />
            <input type='password' className='outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 text-sm rounded-xl bg-gray-200 ' placeholder='Create Password' />
            <button className='w-[80%] bg-amber-950 rounded-xl text-white mt-10 h-12 cursor-pointer transition-all duration-150 ease-linear hover:tracking-[3px] active:scale-99 text-md '>SIGN UP</button>
        </form>
    )
}

export default Signup
