import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Products from '../pages/Products';
import Navbar from '../components/Navbar';
import Locations from '../pages/Locations';
import Employees from '../pages/Employees';
import Jobs from '../pages/Jobs';
import Contact from '../pages/Contact';
import About from '../pages/About';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/productos' element={<Products/>}/>
                <Route path='/ubicaciones' element={<Locations/>}/>
                <Route path='/empleados' element={<Employees/>}/>
                <Route path='/trabajos' element={<Jobs/>}/>
                <Route path='/contactanos' element={<Contact/>}/>
                <Route path='/quienes-somos' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;
