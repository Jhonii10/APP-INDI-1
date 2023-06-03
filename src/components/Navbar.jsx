import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const menuItems = [

    
    {
        label:'Products',
        url:'/'
    },
    {
        label:'locations',
        url:'/'
    },
    {
        label:'Employees',
        url:'/'
    },
    {
        label:'Jobs',
        url:'/'
    },
    {
        label:'Contacts',
        url:'/'
    },
    {
        label:'About',
        url:'/'
    },
    
    
  ]


    return (
        <div>
            <header className='bg-white border'>
                <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
                    <NavLink className='block text-blue-600' href='#!'>
                        <span className=''>Logo</span>
                    </NavLink>

                    <div className='flex flex-1 items-center justify-end md:justify-between'>
                    <nav aria-label="Site Nav" class="hidden md:block">
        <ul class="flex items-center gap-6 text-lg">

            {
                menuItems.map((elements)=>{
                    return (<li key={elements.label}>
                        <NavLink className='text-gray-600 transition hover:text-black-500/75' to={elements.url}>
                           {elements.label}
                        </NavLink>
                    </li>)
                })
            }

        </ul>
      </nav>
      <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
                <button className='block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'>
                  login
                </button>
                <button className='hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-bluec-600/75 sm:block'>
                  register
                </button>

            </div>
            <button
          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>

                    </div>
 
                </div>
            </header>
        </div>
    );
}

export default Navbar;
