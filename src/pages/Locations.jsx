import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import CardsLocations from '../components/CardsLocations';
import Footer from '../components/Footer';

const Locations = () => {


    return (
        <div className='pt-24'>
            
            <Breadcrumbs/>
            <h1 className='mt-8 text-3xl font-bold'>Puntos de venta minoristas y mayoristas</h1>
            <p>📍Cali Valle Del Cauca</p>
            <CardsLocations/>     
            <div className='mt-12'>
            <Footer/>
            </div>
        </div>
    );
}

export default Locations;
