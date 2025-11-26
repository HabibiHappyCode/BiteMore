import React from 'react'
import { Outlet } from 'react-router-dom'
import NormalNavbar from '../navigations/NormalNavbar'
import Footer from '../footer/Footer'

function NormalRootLayouts() {
    return (
        <>
            <NormalNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default NormalRootLayouts
