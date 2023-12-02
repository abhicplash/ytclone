import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div className='grid grid-flow-col w-[100%]'>
            <SideBar />
            {/* <MainContainer /> */}
            <Outlet/>
        </div>
    )
}

export default Body