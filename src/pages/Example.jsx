import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Example() {

  const [isHovered, setIsHovered] = useState(false);


  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light"> 
      
      <div
        className={`collapse navbar-collapse${isHovered ? " show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li
            className={`nav-item dropdown${isHovered ? " show" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              className="nav-link dropdown-toggle"
              to="!#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isHovered ? "true" : "false"}
            >
              Dropdown
            </a>
            <div
              className={`dropdown-menu${isHovered ? " show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Example;
