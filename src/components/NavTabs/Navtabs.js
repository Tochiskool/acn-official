import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

const Navtabs = () => {
  const location = useLocation();
  return (
    <header>
      <Link to='/'>ACN LOGO</Link>
      <nav className='navContainer'>
        <li className='navChild'>
          <Link
            to='/'
            className={
              location.pathname === "/" ? "navChild active" : "nav-Child"
            }
          >
            Home
          </Link>
        </li>
        <li className='navChild'>
          <Link
            to='/about'
            className={
              location.pathname === "/about" ? "navChild active" : "navChild"
            }
          >
            About
          </Link>
        </li>
        <li className='navChild'>
          <Link
            to='/projects'
            className={
              location.pathname === "/projects" ? "navChild active" : "navChild"
            }
          >
            Projects
          </Link>
        </li>
        <li className='navChild'>
          <Link
            to='/contacts'
            className={
              location.pathname === "/contacts" ? "navChild active" : "navChild"
            }
          >
            Contacts
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Navtabs;
