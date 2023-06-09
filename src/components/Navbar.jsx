import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
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

  const [isHovered, setIsHovered] = useState(false);


  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }


 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border border-bottom border-zinc-400 " style={{height:'6.5rem'}}>
      <div className="container" style={{height:'6rem'}}>
        <NavLink className="navbar-brand text-blue-600" to="/" onClick={''}>
          Logo
        </NavLink>
        <div
        className={`collapse navbar-collapse${isHovered ? " show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto" >
          <li
            className={`nav-item dropdown${isHovered ? " show" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              className="nav-link dropdown-toggle d-flex align-items-center"
              to="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isHovered ? "true" : "false"}
              style={{height:'6rem'}}
              
            >
              <span>Dropdown</span>
            </NavLink>
            
            <div
              className={` dropdown-menu${isHovered ? " show " : ""}`}
              aria-labelledby="navbarDropdown"
              style={{
                width:'100%', position: "fixed", top:'6rem', left: 0 
              }}
            >
            <div className='jn-10-1'>
              {
                menuItems.map((elements) => (
                <li key={elements.label} className="nav-item w-100 ">
                  <NavLink
                    className="nav-link text-gray-600 transition hover:text-black-500/75 dropdown-item"
                    to={elements.url}
                    onClick={''}
                  >
                    {elements.label}
                  </NavLink>
                </li>
              ))

              }
              </div>
            </div>
          </li>
          <div className="collapse navbar-collapse" >
          <ul className="navbar-nav ml-auto">

            {about.map((elements) => (
              <li key={elements.label} className="nav-item">
                <NavLink
                  className="nav-link text-gray-600 transition hover:text-black-500/75"
                  to={elements.url}
                  onClick={''}
                >
                  {elements.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        </ul>
        
      </div>

        

        <div className="ml-auto">
          <button className="btn btn-primary mr-2">Login</button>
          <button className="btn btn-outline-primary">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
