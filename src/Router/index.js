import React, { Suspense } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import Defaultlayout from '../layouts/Defaultlayout';
import { routes } from './routes'

export const Layouts = ['BlankLayout', 'Defaultlayout']

const isAuth = false;

const Routes = () => {

    const elements = useRoutes(routes);
    const { pathname } = useLocation();
    const selectedRoute = routes.find(p => p.path === pathname)
    if (selectedRoute === undefined) {
        return <Navigate to='error' />
    }
    else {
        const meta = routes.find(p => p.path === pathname).meta
        return meta === 'auth' && isAuth === false ?
            <Navigate to="/Login" replace /> : selectedRoute.layout === 'Blank' ?
                <BlankLayout> {elements}</BlankLayout> : <Defaultlayout>{elements}</Defaultlayout>
    }
}

const index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes />
            </Suspense>
        </BrowserRouter>
    )
}

export default index
