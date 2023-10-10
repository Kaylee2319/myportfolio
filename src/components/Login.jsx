import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/ToDo.css';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <>
      <NavBar />
      <div className="topTitle">
        <h1 className="gameUp">WELCOME To Kaylees ToDo List</h1>
      </div>
      <div className="signInTitle">
        <p className="signIn">The app that keeps you oranized</p>
      </div>

      <form className="loginForm" >
        <p className="email">Email:</p>
        <input
          className="emailBox"
          id="email"
          type="email"
          name="email"
        />
        <p className="passwords">Password:</p>
        <input
          className="passwordBox"
          type="password"
          name="password"
        />
        <Link to="/passwordreset" className="forgot">
          <span className="forgotten">Forgot Password?</span>
        </Link>
        <input className="loginButton" type="submit" value="SIGN IN" />
      </form>
      <div className="noAccountTitle">
        <p className="noAccountTitle">Don't have an account?</p>
      </div>
      <div className="signupLink">
        <Link to="/signup" className="signupLink">
          <span className="signLink">Sign up</span>
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default Login
