import React, {  useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Lista from './Lista';
import MenuPhone from './MenuPhone';


const Navbar = () => {

  

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
    
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [isFixed, setIsFixed] = useState(false);
    

      useEffect(() => {
        let prevScrollY = window.scrollY;
      
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setIsFixed(prevScrollY >= currentScrollY && prevScrollY >= 35);
          prevScrollY = currentScrollY;

        };

        
      
        window.addEventListener("scroll", handleScroll);
        
      
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
      <header 
    

      
      className={`z-10 top-0 left-0 w-full h-28 flex flex-row items-center justify-between bg-transparent  ${
        isFixed ? 'fixed-10 ' : 'absolute'
      }
      
      `}  


    >
         <div className="w-full flex h-28  items-center gap-20 px-8 sm:px-6 lg:px-20">
          <NavLink className="block text-teal-600" to ="/">
            <span className="sr-only">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version={1.0}
              width={50}
              height={50}
              viewBox="0 0 283.000000 298.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M1000 2506 l0 -236 264 0 c286 0 370 -9 485 -55 249 -97 421 -297 487 -565 17 -71 17 -269 0 -340 -55 -221 -177 -390 -366 -505 -159 -96 -263 -115 -621 -115 l-249 0 0 -235 0 -235 279 0 c366 0 475 16 670 97 208 86 404 240 541 427 210 287 285 675 199 1035 -57 236 -171 435 -350 607 -174 167 -335 257 -579 321 -90 24 -112 26 -427 30 l-333 5 0 -236z" fill='#263272'/>
                <path d="M330 2500 l0 -230 250 0 250 0 0 230 0 230 -250 0 -250 0 0 -230z" fill='#e65100'/>
                <path d="M330 1150 l0 -930 250 0 250 0 0 930 0 930 -250 0 -250 0 0 -930z" fill='#26c6da'/>
              </g>
            </svg> 
            

          </NavLink>
          <div className="flex flex-1 items-center justify-end md:justify-between"> 
          <nav className='hidden md:block'>
          <div className="flex space-x-4  md:flex lg:flex h-28 ">
          
            <button className="flex items-center text-gray-600 hover:text-black-500"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="mr-1 text-sm lg:text-base md:mr-0">Recursos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-gray-600"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            
            {(

              <div className={`${'dropdown-menu'} ${isDropdownOpen ? 'dropdown-menu-open':''}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>  
              <Lista/>
              </div>
            )}  
          

          {about.map((item) => (
            <li key={item.url} className='list-none grid place-content-center  text-sm lg:text-base'>
              <NavLink
                className="text-gray-600 hover:text-black-500"
                to={item.url}
                onClick={''}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </div>
        </nav>
      <div className="flex items-center gap-4">
        <div className=" hidden sm:flex sm:gap-4">
          <NavLink
            className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            to="/empleados"
          >
            Login
          </NavLink>
          <NavLink
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            to="/empleados/registro"
          >
            Register
          </NavLink>
        </div>

        <MenuPhone/>

        

      </div>
    </div>
  </div>
</header>

        
    );
}

export default Navbar;
