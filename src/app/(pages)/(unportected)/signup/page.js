"use client"

import { useTodo } from '@/context/Todo'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

// export const metadata = {
//   title : " Signup || TODOS ",
//   description : "Signup Page Here"
// } meta data srf serverpages pr jae ga 

function page() {

  const [formdata, setformdata] = useState({ name: "", email: "", number: "", password: "" })
  const [err, seterr] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const numberRef = useRef(null)
  const passwordRef = useRef(null)
  const { Signup_user } = useTodo()

  const handler = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!formdata.name) {
      toast.error("Name is required");
      seterr(true);
      nameRef.current.focus();
      setTimeout(() => seterr(false), 1300)

      return;
    }
    if (!formdata.email) {
      toast.error("Email is required");
      seterr(true);
      emailRef.current.focus();
      setTimeout(() => seterr(false), 1300)

      return;
    }
    if (!formdata.number) {
      toast.error("Number is required");
      seterr(true);
      numberRef.current.focus();
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

    const success = await Signup_user(formdata)
    if (success) {
      setformdata({ name: "", email: "", number: "", password: "" })
      toast.success("Account Created Successfully")
    }

  };


  return (
    <div className='text-2xl flex-col font-bold py-5 text-center bg-amber-950 flex items-center min-h-screen '>
      <p className='text-white mt-16 ' >Login Your Account</p>
      <form onSubmit={submit} className='w-[600px] bg-white rounded-2xl mt-20 h-max py-10 flex justify-center items-center flex-col'>
        <input ref={nameRef} onChange={handler} name='name' value={formdata.name} type='text' className={`outline-none shadow-2xs w-[80%] h-10 px-5 rounded-xl text-sm transition-all duration-150 ease-linear bg-gray-200 ${err && "shake ring-2 ring-red-500 "} `} placeholder='Your Name' />
        <input ref={emailRef} onChange={handler} name='email' value={formdata.email} type='email' className={`outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 transition-all duration-150 ease-linear ${err && "shake ring-2 ring-red-500 "} `} placeholder='Your E-mail' />
        <input ref={numberRef} onChange={handler} name='number' value={formdata.number} type='number' className={`outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 transition-all duration-150 ease-linear ${err && "shake ring-2 ring-red-500 "} `} placeholder='Phone Number ' />
        <input ref={passwordRef} onChange={handler} name='password' value={formdata.password} type='password' className={`outline-none shadow-2xs mt-5 w-[80%] h-10 px-5 rounded-xl text-sm bg-gray-200 transition-all duration-150 ease-linear ${err && "shake ring-2 ring-red-500 "} `} placeholder='Create Password' />
        <button disabled={err} type='submit' className='w-[80%] bg-amber-950 rounded-xl text-white mt-10 h-12 cursor-pointer transition-all duration-150 ease-linear hover:tracking-[3px] active:scale-99 text-md '>SIGN UP</button>
      </form>
    </div>
  )
}

export default page
