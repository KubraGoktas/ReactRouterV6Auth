import React, { Suspense } from 'react'
import { Route, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import { routes } from './routes'



const Routes = () => {
    const elements = useRoutes(routes);
    return elements;
}

const index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes />
            </Suspense>
            {/* <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes> */}
        </BrowserRouter>
    )
}

export default index
