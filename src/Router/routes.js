import React from "react"

const Home = React.lazy(() => import('../Pages/Home'))
const About = React.lazy(() => import('../Pages/About'))
const Contact = React.lazy(() => import('../Pages/Contact'))
const Login = React.lazy(() => import('../Pages/Login'))
const Profile = React.lazy(() => import('../Pages/Profile'))
const Error = React.lazy(() => import('../Pages/Error'))
const Defaultlayout = React.lazy(() => import('../layouts/Defaultlayout'))
const Blanklayout = React.lazy(() => import('../layouts/BlankLayout'))


export const routes = [
    {
        path: '/',
        element: <Defaultlayout />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'profile',
                element: <Profile />,
                meta: 'auth'
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: '/',
                element: <Home />,
            },

        ]
    },
    {
        path: '/',
        element: <Blanklayout />,
        children: [
            {
                path: '*',
                element: <Error />

            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
]