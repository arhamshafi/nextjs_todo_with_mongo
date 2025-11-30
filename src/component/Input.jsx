"use client"
import React, { useRef, useState } from 'react'
import { usetodo } from "@/context/Todo";
import { toast } from 'react-toastify';

function Input() {

    const [title, settitle] = useState("")
    const [loader_on_add, setloader_on_add] = useState(false)
    const inpref = useRef(null)
    const [err, seterr] = useState(false)
    const { addTodo, alltodo } = usetodo()

    console.log("alltodo", alltodo);


    const handlesubmit = async (e) => {
        e.preventDefault()
        if (!title.trim()) {
            toast.error("Field Must Be Required !")
            inpref.current.focus()
            seterr(true)
            setTimeout(() => {
                seterr(false)
            }, 1000);
            return
        }
        setloader_on_add(true)
        const success = await addTodo(title)
        if (success) settitle("")
        setloader_on_add(false)
    }



    return (
        <form onSubmit={handlesubmit} className='w-[70%] h-12  mx-auto mt-10 flex justify-between items-center'>
            <input type="text" placeholder='Type Something ..' ref={inpref} onChange={(e) => settitle(e.target.value)} value={title} className={`w-3/4 h-full rounded-xl bg-white outline-none px-5 text-xl tracking-[1px] ${err && "shake"} `} />
            <button type='submit' className={`w-[150px] text-white h-full bg-orange-500 ${loader_on_add ? "opacity-75" : "opacity-100"} rounded-xl cursor-pointer hover:tracking-[4px] transition-all ease-in-out duration-200 active:scale-95 text-xl font-bold `}>
                {loader_on_add ? <div className='w-8 h-8 rounded-full border-b-2 border-l-2 animate-spin border-white mx-auto '></div> : "ADD"}
            </button>
        </form>
    )
}

export default Input
