import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;
