import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({categoria,nombre,id}) => {

    const path = `/assets/${categoria}-${id}.png`
    
    return (
        <div className="rounded-lg bg-gray-100 p-8">
            <NavLink
  to={'#'}
  className="jhoni-card "
>
  <div className="">
    <div className="">
      <img
        alt={nombre}
        src={path}
        className=""
        data-is-loaded="true"
      />
    </div>
  </div>
  <div className="mt-2  text-left">
    <div className="" aria-hidden="true" style={{
        fontSize:'16px',
        width:'100%',
        color:'grey'
    }}>
      {
        categoria.charAt(0).toUpperCase() + categoria.slice(1)
      }
    </div>
    <div className=" py-2 w-full overflow-hidden text-ellipsis whitespace-nowrap text-black font-bold leading-100 text-lg">{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</div>
  </div>
</NavLink>
        </div>
    );
}

export default Card;
