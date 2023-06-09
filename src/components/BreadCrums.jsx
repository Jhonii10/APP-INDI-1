import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex text-gray-500 text-base px-14 h-16 border-y border-black border-opacity-20">
      <ul className="flex space-x-2 items-center">
        <li>
          <Link to="/" className="hover:text-gray-700 ">
          <span class="sr-only"> Home </span>

          <svg
           xmlns="http://www.w3.org/2000/svg"
           class="h-4 w-4"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
           <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
           </svg>
          </Link>
        </li>
        {
          pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const breadcrumbClass = isLast ? 'font-semibold' : '';

          return (
            <li key={routeTo} className={`flex items-center ${breadcrumbClass}`}>
            <li class="rtl:rotate-180">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"/>
            </svg>
              </li>
              {isLast ? name : <Link to={routeTo} className="hover:text-gray-700">{name}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;



