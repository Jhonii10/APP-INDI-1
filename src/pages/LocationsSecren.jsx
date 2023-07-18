import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/BreadCrums';
import { locations } from '../models/locations';
import SectionJob from '../components/SectionJob';
import Footer from '../components/Footer';

const LocationsSecren = () => {
  
    const {locationId} = useParams();
    const {tienda,img,direcion,horarios,ubicacion,telefono} = locations.find((e)=> e.tienda === locationId);
    
    // Dividir la cadena en dos partes
    const partes = horarios.split(/ , |: /);


    return (
        <div className='pt-28'>
        <Breadcrumbs/>
  <section>
    <h1 className='text-3xl leading-normal text-black font-bold leading-120 lg:absolute lg:pl-40 pt-6 '>Tiendas - cali </h1>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt={tienda}
              src={img}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative flex items-center bg-gray-100">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {tienda.charAt(0).toUpperCase() + tienda.slice(1)}
            </h2>
            <p className="mt-4 text-gray-600">
              {direcion}
            </p>
            <div className="flex mt-4">
 
  <p className='border-r border-black pr-8'>
  
    <strong>{partes[0]}</strong> <br /> {partes[1]}
  </p>

  <p className='pl-8'>
   
    <strong>{partes[2]}</strong> <br /> {partes[3]}
  </p>

</div>
            <p className='mt-4'>
                Tel: {telefono}
            </p>
            <Link
              to={ubicacion}
              className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Ver Mapa
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <SectionJob/>
            <div className='mt-16'>
            <Footer/>
            </div>

        </div>
    );
}

export default LocationsSecren;
