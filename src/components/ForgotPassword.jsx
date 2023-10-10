import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


const ForgotPassword = () => {


  return (
    <div>
      <NavBar />
      <h1 className="resetPass">Reset Password</h1>
      <form className="PassResetForm" >
        <label>Email address:</label>
        <input
          className="passemailReset"
          type="email"
          name="email"
          placeholder="Enter email"
        ></input>
        <button className="resetPassButton" type="submit">
          Reset Password
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
