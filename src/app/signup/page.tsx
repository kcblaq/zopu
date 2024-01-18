import Link from 'next/link'
import React from 'react'

export default function Signup() {
    return (
        <main className='w-screen h-screen flex items-center justify-center'>
            <div className='p-6 gap-2 rounded-sm shadow-md border grid bg-gray-300'>
                <input type='email' placeholder=' Enter Email' className='p-2 rounded-sm focus:outline-purple-900 focus:border '  />
                <input type='password' placeholder=' Enter Password' className='p-2  rounded-sm focus:outline-purple-900 focus:border'  />
                <button className=' w-full p-2 rounded-sm border-purple-900 border text-purple-500 font-bold'> Register </button>
                <p> Don't have account?<span className=' text-purple-600 font-bold'> <Link href={'/login'}> Login </Link></span> </p>
            </div>
        </main>
    )
}
