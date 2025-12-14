import React from 'react'
import Welcome from './Welcome'
import Cards from './Cards'

function Overview() {
    return (
        <div className='h-[100vh] w-[85%] max-lg:w-[100%] overflow-auto'>
            <Welcome />
            <Cards />
        </div>
    )
}

export default Overview
