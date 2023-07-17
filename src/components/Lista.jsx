import React from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from '../models/menuItems';

const Lista = () => {


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
                      <img src={item.img} alt={item.label} />
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
