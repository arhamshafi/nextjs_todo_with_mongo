"use client"
import { useTodo } from '@/context/Todo'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'

function Navbar() {

    const [active, setactive] = useState("home")
    const {user} = useTodo() 
    const { data : userData } = useSession() // use to get session data in client only 
    console.log(userData);
    
    

    return (
        <nav className='w-full h-14 bg-white fixed top-0 left-0 flex justify-between items-center px-8 shadow-lg'>
            <img src="/next.svg" className='w-[100px]' alt="" />

            <ul className='w-max flex justify-center items-center gap-5'>
                {
                    ["home", "services", "blog", "contact"].map((ele, idx) => (
                        <li key={idx} onClick={() => setactive(ele)} className={` capitalize cursor-pointer text-md font-bold ${active === ele && "text-red-800 line-through"} `} >{ele}</li>
                    ))
                }
            </ul>
            <button onClick={()=>signOut({callbackUrl:"/contact"})} >LOG OUT</button>
        </nav>
    )
}

export default Navbar
