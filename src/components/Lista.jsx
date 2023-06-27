import React from 'react';
import { NavLink } from 'react-router-dom';

const Lista = () => {

  const menuItems = [
    {
      label: 'Categoria',
      url: '/productos',
      img:'/assets/puzzles.svg'
    },
    {
      label: 'Locations',
      url: '/ubicaciones',
      img:'/assets/constructor.svg'
    },
    {
      label: 'Employees',
      url: '/empleados',
      img:'/assets/puzzles.svg'
    },
    {
      label: 'Jobs',
      url: '/trabajos',
      img:'/assets/constructor.svg'
    },
  ];

    return (
        <>
        <ul
                className="jhoni-ul-10 "
                
              >
                {menuItems.map((item) => (
                  <li key={item.url} className="">
                    
                    <NavLink
                      className="jhoni-ul-10-a  "
                      to={item.url}
                      onClick={''}
                    > 
                      <div className='jhoni-ul-10-div'>
                      <img src={item.img} alt='' />
                      </div>
                      <div>
                      {item.label}
                      </div>
                      
                    </NavLink>
                  </li>
                ))}
              </ul>

            
        </>
    );
}

export default Lista;
