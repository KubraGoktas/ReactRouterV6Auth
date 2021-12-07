import React from "react"

const Home = React.lazy(() => import('../Pages/Home'))
const About = React.lazy(() => import('../Pages/About'))
const Contact = React.lazy(() => import('../Pages/Contact'))
const Login = React.lazy(() => import('../Pages/Login'))

export const routes = [
    {
        path: '/Login',
        element: <Login />,
        layout: 'Blank'
    },
    {
        path: '/Home',
        element: <Home />,
        meta: 'auth'
    },
    {
        path: '/About',
        element: <About />,
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '/error',
        element: <Contact />,
        layout: 'Blank'

    },
    {
        path: '/',
        element: <Home />
    }
]