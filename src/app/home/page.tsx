
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Welcome() {
    const router = useRouter()
  return (
   <main className='flex flex-col'>
     <div className='font-bold text-lg md:text-6xl'> Welcome to Zopu</div>
     <div className=' flex items-center justify-center gap-2 md:gap-4 mt-8'>
        <button className=' p-2 px-4 border-2 border-gray-400 shadow-md font-bold'  onClick={()=> router.push("/signup")} > Signup </button>
        <button className=' p-2 px-4 border-2 border-gray-400 shadow-md font-bold' onClick={()=> router.push("/login")}> Login </button>
     </div>
   </main>
  )
}
