"use client"

import { toast } from "react-toastify";
import { createContext, useState, useContext, useEffect } from "react"


const TodoContext = createContext()
export const TodoProvider = ({ children }) => {

    const [alltodo, setalltodo] = useState([])

    const addTodo = async (inp) => {

        try {
            const res = await fetch("/todos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ inp }) })
            const data = await res.json()
            toast.success(data.message)
            await fetchTodos()
            if (!res.ok) throw new Error(data.err || "Something went Wrong")
            return true

        } catch (err) {
            toast.error(err.message)
            return false
        }
    }

    const fetchTodos = async () => {
        try {
            const res = await fetch("/todos", { method: "GET" })
            const data = await res.json()
            console.log(data.todos);
            setalltodo(data.todos)
            
          
            if (!res.ok) throw new Error(data.err || "Something Went Wrong")
        } catch (err) {
            toast.error(err.message)
        }
    }

  useEffect(() => {
     fetchTodos()
}, [])


    return (
        <TodoContext.Provider value={{ addTodo, alltodo }} >
            {children}
        </TodoContext.Provider>
    )
}

export const usetodo = () => { return useContext(TodoContext) }