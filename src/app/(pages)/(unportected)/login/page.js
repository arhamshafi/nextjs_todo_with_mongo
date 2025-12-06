"use client"

import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { signIn, singIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

function page() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [formdata, setformdata] = useState({ email: "", password: "" })
  const [err, seterr] = useState(false)
  const [loader, setloader] = useState(false)
  const router = useRouter()

  const handler = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!formdata.email) {
      toast.error("Email is required");
      seterr(true);
      emailRef.current.focus();
      setTimeout(() => seterr(false), 1300)

      return;
    }
    if (!formdata.password) {
      toast.error("Password is required");
      seterr(true);
      passwordRef.current.focus();
      setTimeout(() => seterr(false), 1300)

      return;
    }

    try {
      setloader(true)
      const result = await signIn("credentials", {
        email: formdata.email,
        password: formdata.password,
        redirect: false
      })
      if (result?.error) throw new Error(result.error)
        
        router.push("/todos")
        router.refresh()

    } catch (err) {
      toast.error(err.message)
    }



  }


  return (
    <div className='text-2xl flex-col font-bold py-5 text-center bg-amber-950 flex items-center min-h-screen '>
      <p className='text-white mt-16 ' >Login Your Account</p>
      <form onSubmit={submit} className='w-[600px] bg-white rounded-2xl mt-20 h-max py-10 flex justify-center items-center flex-col'>
        <input ref={emailRef} onChange={handler} name='email' value={formdata.email} type='email' className={`outline-none shadow-2xs w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 transition-all duration-150 ease-linear ${err && "shake ring-2 ring-red-500 "} `} placeholder='Your E-mail' />
        <input ref={passwordRef} onChange={handler} name='password' value={formdata.password} type='password' className={`outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 transition-all duration-150 ease-linear ${err && "shake ring-2 ring-red-500 "} `} placeholder='Create Password' />
        <button disabled={err || loader} type='submit' className='w-[80%] bg-amber-950 rounded-xl text-white mt-10 h-12 cursor-pointer transition-all duration-150 ease-linear hover:tracking-[3px] active:scale-99 text-md '> {loader ? <div className=' w-[30px] h-[30px] rounded-full mx-auto animate-spin border-b-2 border-l-2 border-white '></div> : "Login"}  </button>
      </form>
    </div>
  )
}

export default page
