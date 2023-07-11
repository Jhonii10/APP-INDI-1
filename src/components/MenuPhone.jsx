import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MenuPhone = () => {


    const {pathname} = useLocation();
    useEffect(() => {
    setMenuVisible(false)
    }, [pathname]);

    const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
      

  };

  useEffect(() => {
    if (menuVisible) {
      // Add the 'no-scroll' class to the body element when the menu is open
      document.body.classList.add('no-scroll');
    } else {
      // Remove the 'no-scroll' class when the menu is closed
      document.body.classList.remove('no-scroll');
    }
  }, [menuVisible]);

  

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

  const about = [
    {
      label: 'Porque Nosotros',
      url: '/Porque-Nosotros',
    },
    {
      label: 'Contactanos',
      url: '/contactanos',
    },
  ];

    return (
        <>
        
        <div className='block rounded-full p-2 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden z-30' 
        style={{
          background:'#f6f1ec'
        }}
        >
        <button className={` menu-button ${menuVisible ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      </div>
      <div className={` menu ${menuVisible ? 'visible' : ''} `}>
      <div className='menu-2x2'></div>
        <div className={`menu-2 ${menuVisible ? 'open' : ''}`}>
        
          <div className='menu-3'>
             <h2 className='text-3xl'>Categoria</h2>
             
             <ul
                className=" grid grid-cols-2 "
                
              >
                {menuItems.map((item) => (
                  <li key={item.url} className="">
                    
                    <NavLink
                      className=" "
                      to={item.url}
                      onClick={''}
                    > 
                      <div className=''>
                      <img src={item.img} alt=''className='min-w-[6rem]' />
                      </div>
                      <div>
                      {item.label}
                      </div>
                      
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul className=' jhoni-phone-ul'>
          {about.map((item) => (
            <li key={item.url} className='list-none '>
              <NavLink
                className="text-gray-600 hover:text-black-500"
                to={item.url}
                onClick={''}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          </ul>

          <div className="items-center flex justify-center gap-4 p-4">
          <NavLink
            className=" rounded-md bg-blue-600  px-5 py-2.5  text-sm font-medium text-white transition hover:bg-blue-700"
            to="/empleados"
          >
            Login
          </NavLink>
          <NavLink
            className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 "
            to="/empleados/registro"
          >
            Register
          </NavLink>
        </div>
          

              
             

          </div>

          

                    
        </div>
        
      </div>
            
        </>
    );
}

export default MenuPhone;
