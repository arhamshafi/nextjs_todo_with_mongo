import Navbar from '@/component/Navbar'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
