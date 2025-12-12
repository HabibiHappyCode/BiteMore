import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../navigations/DashboardNav'

function DashBoardRoot() {
    return (
        <div className='bg-[#F0F0F0] w-full h-[100vh] flex gap-5  p-4  max-md:px-2'>
            <DashboardNav />
            <Outlet />
        </div>
    )
}

export default DashBoardRoot
