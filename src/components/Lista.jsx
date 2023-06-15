import React from 'react';
import { NavLink } from 'react-router-dom';

const Lista = () => {

    const menuItems = [
        {
          label: 'Products',
          url: '/productos',
        },
        {
          label: 'Locations',
          url: '/ubicaciones',
        },
        {
          label: 'Employees',
          url: '/empleados',
        },
        {
          label: 'Jobs',
          url: '/trabajos',
        },
      ];

    return (
        <>
        <ul className="flex flex-wrap gap-4 justify-center">
  {menuItems.map((item) => (
    <li key={item.url} className="w-full sm:w-auto border border-black">
      <NavLink
        className="block px-4 py-2 text-gray-600 hover:text-black-500"
        to={item.url}
        onClick={''}
      >
        {item.label}
      </NavLink>
    </li>
  ))}
</ul>

            
        </>
    );
}

export default Lista;
