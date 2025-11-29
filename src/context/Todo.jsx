"use client"

const { createContext, useState, useContext } = require("react");

const TodoContext = createContext()
export const TodoProvider = ({ children }) => {

    const [work, setwork] = useState("context working..")
    return (
        <TodoContext.Provider value={{ work }} >
            {children}
        </TodoContext.Provider>
    )
}

export const usetodo = () => { return useContext(TodoContext) }