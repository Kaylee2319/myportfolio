import React from 'react';
import '../css/Footer.css';
import klogo from '../images/klogo.png'
const Footer = () => {


  return (
    <>
      <div className="Footer">
    <img className='Footer_Image' src={klogo} alt='logo' />
      <div className='Footer_Quote'>
        THANKS FOR STOPPING BY!
      </div>
      </div>
    </>
  );
};

export default Footer;
