import React from 'react'
import { Outlet } from 'react-router-dom'
import NormalNavBar from '../navigations/NormalNavbar'
import Footer from '../footer/Footer'

function AuthFormRootLayout() {
    return (
        <div>
            <NormalNavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AuthFormRootLayout
