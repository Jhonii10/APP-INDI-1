  import React, { Suspense, useEffect, useState } from 'react';
  import { lazy } from 'react';
  import {Navigate, Route, Routes, useLocation } from 'react-router-dom';
  import Navbar from '../components/Navbar';
  import Index from '../pages/Index';
  import EmployeesRegister from '../pages/EmployeesRegister';
  import { ProtectedRoute } from './PrivateRoutes';
  import ProductosSecren from '../pages/ProductosSecren';
  import Rewies from '../pages/Rewies';
  import LocationsSecren from '../pages/LocationsSecren';
  import LoadingSpinner from '../components/LoadingSpinner';
import CubikaApp from '../app/pages/CubikaApp';

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

        const [showNavbar, setShowNavbar] = useState(true);
        const location = useLocation();
      
        useEffect(() => {
          setShowNavbar(location.pathname !== '/home');
        }, [location]);
        
    
        
        
    
    return (
        <>
            <Suspense fallback={  <div className="spinner-container"><LoadingSpinner/> </div>}>
              {
                showNavbar && <Navbar/>
              }
              <ScrollToTop/>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/productos" element={<Products />} />
                <Route path='/productos/:categoryId' element={<ProductosSecren/>}/>
                <Route path="/ubicaciones" element={<Locations />} />
                <Route path="/ubicaciones/:locationId" element={<LocationsSecren/>} />
                <Route path="/empleados" element={<Employees />} />
                <Route path="/empleados/registro" element={<EmployeesRegister />} />
                <Route path="/home" element={<ProtectedRoute><CubikaApp/></ProtectedRoute> } />
                <Route path="/trabajos" element={<Jobs />} />
                <Route path="/contactanos" element={<Contact />} />
                <Route path="/Porque-Nosotros" element={<About />} />
                <Route path='/Reviews' element={<Rewies/>}/>
                <Route path='/*' element={<Navigate to='/'/>}/>
                
              </Routes>
            </Suspense>
      
        </>
    );
  };

  export default Rutas;
