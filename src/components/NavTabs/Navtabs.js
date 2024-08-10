import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import BackgroundImage from "../assets/Images/goodday.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navtabs = () => {
  const location = useLocation();
  return (
    <header>
      <img className='background-image' src={BackgroundImage} alt='' />

      <nav className='navContainer'>
        <div>
          <Link to='/' className='imageStyle'>
            ACN LOGO
          </Link>
        </div>

        <p>
          <FontAwesomeIcon icon={faBars} size='lg' className='bars' />
        </p>
        <ul>
          <li className='navChild'>
            <Link
              to='/'
              className={
                location.pathname === "/" ? "navChild active" : "not-active"
              }
            >
              Home
            </Link>
          </li>
          <li className='navChild'>
            <Link
              to='/about'
              className={
                location.pathname === "/about"
                  ? "navChild active"
                  : "not-active"
              }
            >
              About
            </Link>
          </li>
          <li className='navChild'>
            <Link
              to='/projects'
              className={
                location.pathname === "/projects"
                  ? "navChild active"
                  : "not-active"
              }
            >
              Projects
            </Link>
          </li>
          <li className='navChild'>
            <Link
              to='/contacts'
              className={
                location.pathname === "/contacts"
                  ? "navChild active"
                  : "not-active"
              }
            >
              Contacts
            </Link>
          </li>
        </ul>
        <p>
          <FontAwesomeIcon icon={faXmark} size='lg' className='faxMark' />
        </p>
      </nav>
    </header>
  );
};

export default Navtabs;
