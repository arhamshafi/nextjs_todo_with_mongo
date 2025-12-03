"use client"
import React, { useRef, useState } from 'react'

function Login() {

    const [formdata, setformdata] = useState({ email: "", password: "" })
    const emailinp = useRef(null)
    const passwordinp = useRef(null)
    const [err, seterr] = useState(false)

    const handler = async (e) => {
        e.preventDefault()
        if (!formdata.email) {
            seterr(true)
            emailinp.current.focus()
            setTimeout(() => {
                seterr(false)
            }, 1000);
            return
        }
        if (!formdata.password) {
            seterr(true)
            passwordinp.current.focus()
            setTimeout(() => {
                seterr(false)
            }, 1000)
            return
        }
        console.log(formdata);

    }

    return (
        <form onSubmit={handler} className='w-[600px] bg-white rounded-2xl mt-20 h-max py-10 flex justify-center items-center flex-col'>
            <input ref={emailinp} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} value={formdata.email} type='text' className={`outline-none shadow-2xs w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 ${err && "focus:ring-2 shake focus:ring-red-500"}`} placeholder='E-mail Here ' />
            <input ref={passwordinp} onChange={(e) => setformdata({ ...formdata, password: e.target.value })} value={formdata.password} type='password' className={`outline-none shadow-2xs w-[80%] h-10 px-5 rounded-xl text-sm mt-5 bg-gray-200 ${err && "shake focus:ring-2 focus:ring-red-500"} `} placeholder='Password Here' />
            <button type='submit' disabled={err} className='w-[80%] bg-amber-950 rounded-xl text-white mt-10 h-12 cursor-pointer transition-all duration-150 ease-linear hover:tracking-[3px] active:scale-99 text-md '>LOGIN</button>
        </form>
    )
}

export default Login
