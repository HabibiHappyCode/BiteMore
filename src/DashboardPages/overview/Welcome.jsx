import React from 'react'
import useAuthStore from '../../store/authContext';

function Welcome() {
    const { user } = useAuthStore();
    return (
        <div className='w-[100%] h-auto bg-green-900 text-white p-8 rounded-xl flex flex-col gap-4 bg-[linear-gradient(156deg,rgba(56,123,62,0.83)_41%,rgba(160,221,117,0.85)_59%,rgba(160,221,117,0.47)_100%)]'>
            <h1 className="font-medium text-[2em] max-md:text-[1.4em]">Welcome back, {user?.fullName} 👋</h1>
            <p className=' max-md:text-[.8em]'>Here's your account overview for the last 30 days</p>
            <p className="text-[.9em]  max-md:text-[.7em] bg-black/10 border-1 border-black/10 w-23 rounded-full py-1 text-center ">USER</p>
        </div>
    )
}

export default Welcome
