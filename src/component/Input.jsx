"use client"
import React, { useState } from 'react'
import { usetodo } from "@/context/Todo";

function Input() {

    const [title, settitle] = useState("")
    const { addTodo } = usetodo()


    const handlesubmit = async (e) => {
        e.preventDefault()
        const success = await addTodo(title)
        if (success) settitle("")
    }


    return (
        <form onSubmit={handlesubmit} className='w-[70%] h-12  mx-auto mt-10 flex justify-between items-center'>
            <input type="text" onChange={(e) => settitle(e.target.value)} value={title} className='w-3/4 h-full rounded-xl bg-white outline px-5 text-xl tracking-[1px] ' />
            <button type='submit' className='w-[150px] text-white h-full bg-orange-500 rounded-xl cursor-pointer hover:tracking-[4px] transition-all ease-in-out duration-200 text-xl font-bold '>Add</button>
        </form>
    )
}

export default Input
