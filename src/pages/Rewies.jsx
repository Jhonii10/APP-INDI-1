import React from 'react';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/BreadCrums';
import reviews from '../models/reviews';
import SectionJob from '../components/SectionJob';

const Rewies = () => {
    return (
        <div className='pt-28'>
      <Breadcrumbs/>
      <div className='pt-16 flex items-center justify-center'>
        <div className='px-4 md:px-16 lg:px-32 max-w-screen-lg '>
          <h2 className='text-4xl text-left'>Reseñas de clientes</h2>
          <div className='mt-12'>
          {
            reviews.map(review =>
               <div className="mt-8 flex flex-col lg:flex-row gap-4 border-b border-gray-400 pb-4" key={review.nombre}>
                <div className='lg:flex items-center w-full lg:w-2/5 justify-center hidden ' >
                <img alt="Laptop" src={review.img} className="h-24 w-24 rounded-xl object-cover  " />

                </div>
                <div className='w-full'>
              
                 <div className='flex items-center'>
                <img alt="Laptop" src={review.img} className="h-16 w-16 rounded-xl object-cover lg:hidden" />
                <div className='text-left pl-4 lg:pl-0'>
                    <h2 className='font-bold'>{review.nombre}</h2>
                    <data>{review.fecha}</data>
                </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 text-left">{review.reseña}</p>
              </div>  
               </div>
               
            )

          }
            </div>
        </div>
      </div>
      <SectionJob/>
      <div className='mt-16'>
      <Footer/>
      </div>
    </div>
    );
}

export default Rewies;
