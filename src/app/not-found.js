import Link from 'next/link'
import React from 'react'

function Notfound() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center text-4xl bg-white text-black font-bold '>
      <p>Page Not Found</p>
      <button> <Link href={"/"} className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition mt-5 " >Return To Home </Link> </button>
    </div>
  )
}

export default Notfound
