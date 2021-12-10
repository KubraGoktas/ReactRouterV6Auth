import React from 'react'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Defaultlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            bu default layout
            <Outlet />
            <Footer />
        </div>
    )
}

export default Defaultlayout
