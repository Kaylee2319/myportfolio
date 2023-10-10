import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/HomePage.css';
import klogo from '../images/klogo.png'
const HomePage = () => {

  return (
    <body className="homePage">
    <NavBar />
      <div className='homePage_Body'>
        <div className='homePage_Logobody'><img className='homePage_Logo' src={klogo} alt="logo"/></div>

          <div className='homePage_Name'>
            <div className='homePage_FullName'>
            <h3 className='homePage_FirstName'>KAYLEE</h3>
            <h3 className='homePage_LastName'>HARDING</h3>
            </div>
            <div className='homePage_FullTitle'>
            <h4 className='homePage_TitleName'>Full Stack</h4>
            <h4 className='homePage_TitleNameOne'>Web Developer</h4>
            </div>
            <h5 className='homePage_Veteran'>UNITED STATES COAST GUARD VETERAN</h5>
        </div>
        </div>
        <Footer />
    </body>
  );
};

export default HomePage;
