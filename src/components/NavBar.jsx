import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {


  return (
    <>
      <div className="NavBar">
      <div className='NavBar_pic'></div>
        <div className='NavBar_links'>
          <Link to="/" className="NavBar_Link1">
          HOME
          </Link>
          <Link to="/portfolio" className="NavBar_Link">
          PORTFOLIO
          </Link>
          <Link to="/contact" className="NavBar_Link1">
          CONTACT ME
          </Link>
          <Link to="/about" className="NavBar_Link">
          ABOUT ME
          </Link>
          <Link to="/login" className="NavBar_Link1">
          TODO
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
