"use client"

import { toast } from "react-toastify";
import { createContext, useState, useContext, useEffect } from "react"


const TodoContext = createContext()
export const TodoProvider = ({ children }) => {

    const [alltodo, setalltodo] = useState([])
    const [loader_on_add, setloader_on_add] = useState(false)


    const addTodo = async (inp) => {

        try {
            setloader_on_add(true)
            const res = await fetch("/todos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ inp }) })
            const data = await res.json()
            toast.success(data.message)
            if (!res.ok) throw new Error(data.err || "Something went Wrong")
            await fetchTodos()
            return true

        } catch (err) {
            toast.error(err.message)
            return false
        }
        finally {
            setloader_on_add(false)
        }
    }

    const fetchTodos = async () => {
        try {
            const res = await fetch("/todos", { method: "GET", cache: 'no-store' })
            const data = await res.json()
            if (!res.ok) throw new Error(data.err || "Something Went Wrong")

            setalltodo(data.todos)
        } catch (err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <TodoContext.Provider value={{ addTodo, alltodo, loader_on_add }} >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => { return useContext(TodoContext) }