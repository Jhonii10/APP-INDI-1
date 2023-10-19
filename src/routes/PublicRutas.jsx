  import React, { Suspense, useEffect } from 'react';
  import { lazy } from 'react';
  import {Navigate, Route, Routes, useLocation } from 'react-router-dom';
  import Navbar from '../components/Navbar';
  import Index from '../pages/Index';
  import ProductosSecren from '../pages/ProductosSecren';
  import Rewies from '../pages/Rewies';
  import LocationsSecren from '../pages/LocationsSecren';
  import LoadingSpinner from '../components/LoadingSpinner';
  import { CheckingAuth } from '../app/components/CheckingAuth';
  import AuthRoutes from './AuthRouter';
  import { UseCheckAuth } from '../hooks/useCheckAuth';
  import Router from '../app/routes/routes';
  ;
 
  const Products = lazy(() => import('../pages/Products'));
  const Locations = lazy(() => import('../pages/Locations'));
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

        
        const location = useLocation();
        
        const isDashboardRoute = location.pathname.startsWith('/dashboard');
    
        const {status} = UseCheckAuth()
   
    if( status === 'checking' || status === ''){
        return <CheckingAuth/>
    }
       
    
    return (
        <>
            <Suspense fallback={  <div className="spinner-container"><LoadingSpinner/> </div>}>
            {isDashboardRoute ? null : <Navbar />}
              <ScrollToTop/>
              <Routes>
                <Route index element={<Index />} />
                <Route path="/productos" element={<Products />} />
                <Route path='/productos/:categoryId' element={<ProductosSecren/>}/>
                <Route path="/ubicaciones" element={<Locations />} />
                <Route path="/ubicaciones/:locationId" element={<LocationsSecren/>} />
                {
                (status === 'authenticated')
                ? <Route path="*" element={<Router/>}/>
                : <Route path="*" element={<AuthRoutes/>}/>
                }
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
