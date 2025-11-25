import React from 'react'
import { Outlet } from 'react-router-dom'
import NormalNavBar from '../navigations/NormalNavbar'

function AuthFormRootLayout() {
    return (
        <div>
            <NormalNavBar />
            <Outlet />
        </div>
    )
}

export default AuthFormRootLayout
