import React, { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Index from '../pages/Index';

const Products = lazy(() => import('../pages/Products'));
const Locations = lazy(() => import('../pages/Locations'));
const Employees = lazy(() => import('../pages/Employees'));
const Jobs = lazy(() => import('../pages/Jobs'));
const Contact = lazy(() => import('../pages/Contact'));
const About = lazy(() => import('../pages/About'));

const Rutas = () => {


    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      };
  
  return (
    <div className="App">
      <BrowserRouter>
          <Suspense fallback={  <div className="spinner-container"><div className="spinner"></div></div>}>
            <Navbar />
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/ubicaciones" element={<Locations />} />
              <Route path="/empleados" element={<Employees />} />
              <Route path="/trabajos" element={<Jobs />} />
              <Route path="/contactanos" element={<Contact />} />
              <Route path="/Porque-Nosotros" element={<About />} />
            </Routes>
          </Suspense>
    
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
