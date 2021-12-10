import React from 'react'
import { Outlet } from 'react-router'

const BlankLayout = ({ children }) => {
    return (
        <div>
            bu BlankLayout
            <Outlet />
        </div>
    )
}

export default BlankLayout
