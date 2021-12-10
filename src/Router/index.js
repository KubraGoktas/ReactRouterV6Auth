import React, { Suspense } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { authorities } from '../utils/authority';
import { routes } from './routes'

export const Layouts = ['BlankLayout', 'Defaultlayout']

const isAuth = 'admin';


const Routes = () => {

    const elements = useRoutes(routes);
    const { pathname } = useLocation();

    let selectedRoute = {}

    routes.map((item) => {
        var eleman = item.children.find(x => item.path + x.path === pathname)
        if (eleman !== undefined) {
            selectedRoute = eleman
        }
    })

    if (selectedRoute.meta) {
        return <RequireAuth eleman={selectedRoute}>{elements}</RequireAuth>
    } else {

        return elements;
    }
}

const RequireAuth = ({ children, eleman }) => {

    if (eleman.meta === 'admin' && isAuth === 'admin') {
        return children
    } else {
        return <Navigate to="/login" replace />
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
