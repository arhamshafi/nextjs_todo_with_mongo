"use client"
import { useTodo } from '@/context/Todo'
import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";

function Todo() {

    const { alltodo } = useTodo()


    console.log();




    return (
        <div className='text-white w-[90%] mx-auto rounded-xl h-[325px] mt-10 overflow-y-auto scrollbar-hide '>
            {
                alltodo.length == 0 ? (<div className='w-full h-full flex gap-5 flex-col justify-center items-center'>
                    {/* <div className='w-[35px] h-[35px] rounded-full border-b-3 animate-spin  border-l-3 border-white'>  </div> */}
                    <p className='tracking-[4px] text-3xl'>No Todos</p>
                </div>) : (
                    alltodo.map((ele, idx) => (
                        <div key={idx} className='w-full h-[50px] flex px-5 items-center justify-between mt-5 hover:opacity-80 transition-all duration-150 ease-in-out hover:scale-99 text-black bg-white rounded-xl ' >
                            <p className='font-bold text-xl'>{ele.title}</p>
                            <div className='flex justify-center gap-3 text-xl items-center'>
                                <MdEdit className='text-blue-500 cursor-pointer ' />
                                <MdDelete className='text-red-600 cursor-pointer' />
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Todo
