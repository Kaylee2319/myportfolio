import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/ContactMe.css';
const Contact = () => {

  return (
    <body className="contactPage">
    <NavBar />
      <div className="contactPage_InfoBackGround">
      <div className="contactPage_Info">
        <h1 className="contactPage_FullName">Kaylee Harding</h1>
        <h3 className="contactPage_Email">Kayleeharding23@gmail.com</h3>
        <h3 className="contactPage_Phone">(409)433-4439</h3>
      <div className="contactPage_Link">
        <a href='https://www.linkedin.com/in/kayleeharding/'><div className='contactPage_linkedin'></div></a>
        <a href='https://docs.google.com/document/d/e/2PACX-1vRAdzzWEPZrtHrVKxXQqb_FTwmd1OTVllCyaXmXAdIC43Ual0wdpMl7Cx-pi_OnJQVWldPlFFSK35_n/pub'><div className='contactPage_Resume'></div></a>
        <a href='https://github.com/Kaylee2319'><div className='contactPage_GitHub'></div></a>
      </div>
      <div className='contactPage_EmailMe'>
      <a className='contactPage_EmailMeButton' href="mailto:kayleeharding23@gmail.com">EMAIL ME!</a>
      </div>
      </div>
      </div>
      <Footer />
    </body>
  );
};

export default Contact;
