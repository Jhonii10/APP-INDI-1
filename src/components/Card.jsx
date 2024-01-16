import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({categoria,nombre}) => {

    const path = `/assets/banner-products/${categoria}.png`

    
    return (
        <div className="rounded-lg bg-gray-100 p-8">
            <NavLink
  to={`/productos/${categoria}`}
  className="jhoni-card "
>
  <div className="">
    <div className="">
      <img
        alt={categoria}
        src={path}
        className=""
        data-is-loaded="true"
      />
    </div>
  </div>
  <div className="mt-2  text-left">
    <div className="" aria-hidden="true" style={{
        fontSize:'18px',
        width:'100%',
        color:'black',
        fontWeight:'bold',
    }}>
      {
        categoria.charAt(0).toUpperCase() + categoria.slice(1)
      }
    </div>
    <div className=" py-2 w-full overflow-hidden text-ellipsis text-gray-600 leading-100 text-lg">{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</div>
  </div>
</NavLink>
        </div>
    );
}

export default Card;
