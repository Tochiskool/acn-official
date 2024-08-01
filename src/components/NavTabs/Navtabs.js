import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navtabs = () => {
  const location = useLocation();
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link
          to='/'
          className={
            location.pathname === "/" ? "nav-link active" : "nav--link"
          }
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/about'
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/projects'
          className={
            location.pathname === "/projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/contacts'
          className={
            location.pathname === "/contacts" ? "nav-link active" : "nav-link"
          }
        >
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default Navtabs;
