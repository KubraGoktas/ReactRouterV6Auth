import React from "react"

const Home = React.lazy(() => import('../Pages/Home'))
const About = React.lazy(() => import('../Pages/About'))
const Contact = React.lazy(() => import('../Pages/Contact'))

export const routes = [
    {
        path: '/Home',
        element: <Home />
    },
    {
        path: '/About',
        element: <About />
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '/',
        element: <Home />
    }
]