import React from 'react'
import { Outlet } from 'react-router-dom'
import NormalNavBar from '../navigations/NormalNavbar'
import Footer from '../footer/Footer'
import ScrollToTop from '../Ui/ScrollToTop'

function AuthFormRootLayout() {
    return (
        <div>
            <ScrollToTop />
            <NormalNavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AuthFormRootLayout
