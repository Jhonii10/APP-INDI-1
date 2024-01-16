import React from 'react';
import RedesSociales from './RedesSociales';
import menuItems from '../models/menuItems';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <>
  
  <footer className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 pb-6  sm:px-6 lg:px-8 ">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start">

          <svg
              xmlns="http://www.w3.org/2000/svg"
              version={1.0}
              width={50}
              height={50}
              viewBox="0 0 283.000000 298.000000"
              preserveAspectRatio="xMidYMid meet"
            >
            <title>Logo</title>
              <g
                transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M1000 2506 l0 -236 264 0 c286 0 370 -9 485 -55 249 -97 421 -297 487 -565 17 -71 17 -269 0 -340 -55 -221 -177 -390 -366 -505 -159 -96 -263 -115 -621 -115 l-249 0 0 -235 0 -235 279 0 c366 0 475 16 670 97 208 86 404 240 541 427 210 287 285 675 199 1035 -57 236 -171 435 -350 607 -174 167 -335 257 -579 321 -90 24 -112 26 -427 30 l-333 5 0 -236z" fill='#263272'/>
                <path d="M330 2500 l0 -230 250 0 250 0 0 230 0 230 -250 0 -250 0 0 -230z" fill='#e65100'/>
                <path d="M330 1150 l0 -930 250 0 250 0 0 930 0 930 -250 0 -250 0 0 -930z" fill='#26c6da'/>
              </g>
            </svg>
          </div>
          <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <ul className="mt-8 flex justify-center gap-4 sm:justify-start md:gap-8">
            <RedesSociales/>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Recursos</p>
            <ul className="mt-8 space-y-4 text-sm">
            {
              menuItems.map(menuItem => 
                <li key={menuItem.label}>
                <Link className="text-gray-700 transition hover:text-gray-700/75" to={menuItem.url}>
                      {menuItem.label}
                </Link>

                </li>
              )
            }
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Contacto</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="flex-1 text-gray-700">john@doe.com</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="flex-1 text-gray-700">0123456789</span>
                </a>
              </li>
              <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  Cali, Valle del cauca, Colombia
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-100 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">

          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            © 2023 Company Name -  by Jhoni ipia 10 ⭐
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

        </div>
    );
}

export default Footer;
