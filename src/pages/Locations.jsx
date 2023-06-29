import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import CardLocation from '../components/CardLocation';

const Locations = () => {
    return (
        <div className='pt-24'>
            
            <Breadcrumbs/>
            <h1>Locations</h1> 
            <CardLocation/> 
            
        </div>
    );
}

export default Locations;
