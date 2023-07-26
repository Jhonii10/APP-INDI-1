import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import Lista from './Lista';
import MenuPhone from './MenuPhone';
import { motion } from 'framer-motion';


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
    


    return (
      <motion.header initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2}}  className="absolute z-9 top-0 left-0 w-full h-28 flex flex-row items-center justify-between bg-transparent z-10 ">
         <div className="w-full flex h-28  items-center gap-20 px-8 sm:px-6 lg:px-20">
          <NavLink className="block text-teal-600" to ="/">
            <span className="sr-only">Home</span>
            <svg aria-hidden="true" width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='nav-j10'>
            <path d="M62.0084 13.1491C62.0084 10.24 59.7011 7.91275 56.8747 7.79639H50.0105V18.4437C50.0682 18.4437 56.8747 18.4437 56.9324 18.4437C59.7588 18.3273 62.0084 16 62.0084 13.1491Z" fill="#EE8500">
            </path>
            <path d="M63.5082 25.0182C63.5082 22.0509 61.2009 19.6654 58.2591 19.5491C58.2014 19.5491 49.9529 19.5491 49.9529 19.5491V30.4291C50.0106 30.4291 58.2591 30.4291 58.3168 30.4291C61.1432 30.3709 63.4505 27.9854 63.5082 25.0182Z" fill="#61C0B9">
            </path><path d="M70.5455 7.85461H65.9309V30.5455H70.5455V7.85461Z" fill="#CBD400"></path><path d="M101.694 28.7418C101.694 30.5455 100.252 32 98.5212 32C96.7331 32 95.291 30.5455 95.291 28.7418C95.291 26.9382 96.7331 25.4836 98.5212 25.4836C100.309 25.4836 101.694 26.9964 101.694 28.7418Z" fill="#EA4C4A"></path><path d="M71.4105 3.25821C71.4105 5.06184 69.9685 6.51639 68.1803 6.51639C66.3922 6.51639 65.0078 5.06184 65.0078 3.25821C65.0078 1.45457 66.4499 0.0582052 68.1803 0.0582052C69.9685 2.34209e-05 71.4105 1.45457 71.4105 3.25821Z" fill="#EA4C4A"></path><path d="M37.7242 19.5491C37.4935 20.3054 36.8013 20.8873 35.9361 20.8873C35.1285 20.8873 34.3787 20.3054 34.1479 19.5491H24.6304C24.9188 25.6 29.8218 30.4291 35.9361 30.4291C41.9927 30.4291 46.9534 25.6 47.2418 19.5491H37.7242Z" fill="#EA4C4A"></path><path d="M47.2416 18.3854H37.7817C38.0701 13.0327 42.0502 8.61089 47.2416 7.73816V18.3854Z" fill="#61C0B9"></path><path d="M24.6304 7.79639C29.8795 8.61093 33.9172 13.0328 34.2056 18.4437H24.6881C24.6881 18.3855 24.6304 18.3855 24.6304 18.3273V7.79639Z" fill="#CBD400"></path><path d="M10.7866 20.8872C10.0367 20.6545 9.45988 19.9563 9.45988 19.0836C9.45988 18.2691 10.0367 17.5127 10.7866 17.28V7.73816C4.78763 7.97089 0 12.9745 0 19.1418C0 25.2509 4.78763 30.2545 10.7866 30.4872V20.8872Z" fill="#61C0B9"></path><path d="M11.9402 30.4873V21.0037C17.3046 21.2946 21.6308 25.3091 22.496 30.4873H11.9402Z" fill="#EE8500"></path><path d="M22.496 7.73816C21.6885 13.0327 17.3046 17.1054 11.9402 17.3963V7.79634C11.9979 7.79634 11.9979 7.73816 12.0555 7.73816H22.496Z" fill="#EA4C4A"></path><path d="M96.9062 18.6764C97.137 17.92 97.8292 17.3382 98.6944 17.3382C99.5019 17.3382 100.252 17.92 100.483 18.6764H110C109.712 12.6255 104.809 7.79639 98.6944 7.79639C92.6378 7.79639 87.6771 12.6255 87.3887 18.6764H96.9062Z" fill="#EE8500"></path><path d="M87.3887 19.84H96.7909C96.5025 25.1927 92.5224 29.6145 87.3887 30.4872V19.84Z" fill="#61C0B9"></path><path d="M110 30.4872C104.751 29.6727 100.713 25.2509 100.425 19.84H109.942C109.942 19.8981 110 19.8981 110 19.9563V30.4872Z" fill="#CBD400"></path><path d="M73.7178 18.4437C79.5437 18.4437 84.2736 13.6728 84.2736 7.79639H73.7178V18.4437Z" fill="#61C0B9"></path><path d="M84.4467 30.4873C84.4467 24.4946 79.659 19.6655 73.7178 19.6655V30.4873H84.4467Z" fill="#EA4C4A"></path>
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

            
            {isDropdownOpen && (

              <div className='right-0 dropdown-menu '
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
</motion.header>

        
    );
}

export default Navbar;
