import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import ListCard from '../components/ListCard';
import SectionJob from '../components/SectionJob';
import Footer from '../components/Footer';

const Products = () => {
    return (
        <div className='pt-24 '>
            
            <Breadcrumbs/>
            <h2 className='mt-8 text-3xl font-bold'>Conoce mas sobre nuestros produtos por su categorias</h2>
            <ListCard/>
            <div className='mt-8'>
            <SectionJob/>
            </div>
            <div className='mt-12'>
            <Footer/>
            </div>

        </div>
    );
}

export default Products;
