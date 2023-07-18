import React from 'react';
import { NavLink } from 'react-router-dom';

const CardLocation = ({img,tienda,direcion,horarios,ubicacion}) => {

    const path = `/ubicaciones/${tienda}`
     
    return (
        <div>
            
  <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm">
   
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <img
        alt={tienda}
        src={img}
        className="h-full w-full rounded-xl object-cover"
      />
      <div>
        <h2 className="text-lg font-medium">
          {tienda}
        </h2>
        <h3>
          {direcion}
        </h3>
        <p className="mt-4 text-sm text-gray-500">
          {horarios} 
        </p>
        <div className="mt-6 sm:text-right gap-2 flex justify-center">

        <NavLink
            to={path}
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Mas detalles 
          </NavLink>
          <NavLink
            to={ubicacion}
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Ver mapa  
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default CardLocation;
