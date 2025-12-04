import React from 'react'
import { Outlet } from 'react-router-dom'
import NormalNavbar from '../navigations/NormalNavbar'
import Footer from '../footer/Footer'
import ScrollToTop from '../Ui/ScrollToTop'

function NormalRootLayouts() {
    return (
        <>
            <ScrollToTop />
            <NormalNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default NormalRootLayouts
