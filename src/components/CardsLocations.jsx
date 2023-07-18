import React from 'react';
import CardLocation from './CardLocation';
import { locations } from '../models/locations.js';

const CardsLocations = () => {
       
    return (
        <div>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6  ">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        {
            locations.map( ubic => <CardLocation key={ubic.tienda} {...ubic}/>)
        }
        </div>
        </div>
            
        </div>
    );
}

export default CardsLocations;
