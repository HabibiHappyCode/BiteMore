import React from 'react'
import { Outlet } from 'react-router-dom'
import NormalNavbar from '../navigations/NormalNavbar'

function NormalRootLayouts() {
    return (
        <>
            <NormalNavbar />
            <Outlet />
        </>
    )
}

export default NormalRootLayouts
