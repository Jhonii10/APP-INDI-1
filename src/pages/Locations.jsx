import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import CardLocation from '../components/CardLocation';
import Error from '../components/Error';

const Locations = () => {


    return (
        <div className='pt-24'>
            
            <Breadcrumbs/>
            <h1>Locations</h1> 
            <CardLocation/> 
            <Error/>
        </div>
    );
}

export default Locations;
