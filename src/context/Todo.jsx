"use client"

const { createContext, useState, useContext } = require("react");

const TodoContext = createContext()
export const TodoProvider = ({ children }) => {

    const [loader_on_add, setloader_on_add] = useState(false)

    const addTodo = async (title) => {
        try {
            setloader_on_add(true)
            console.log(title);
            return true

        } catch (err) {
            console.log(err.message);
            return false
        }
        finally {
            setloader_on_add(false)
        }
    }

    return (
        <TodoContext.Provider value={{ addTodo }} >
            {children}
        </TodoContext.Provider>
    )
}

export const usetodo = () => { return useContext(TodoContext) }