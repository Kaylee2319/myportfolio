import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/ToDo.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

  return (
    <>
    <NavBar />
    <div>
      <h1>Welcome to Kaylees ToDo planning app</h1>
      <h2 className="signupTitle">Create Your Account</h2>

      <form className="signUpForm" >
        <div>
          <div htmlFor="email">Email Address:</div>
          <input
            className="signUpF"
            type="email"
            name="email"
          />
        </div>
        <div>
          <div htmlFor="outpostId">User ID:</div>
          <input
            className="signUpF"
            type="text"
            name="user_name"
          />
        </div>
        <div>
          <div htmlFor="firstName">First Name:</div>
          <input
            className="signUpF"
            type="text"
            name="first_name"
          />
        </div>
        <div>
          <div htmlFor="signUpF">Last Name:</div>
          <input
            className="signUpF"
            type="text"
            name="last_name"
          />
        </div>
        <div>
          <div htmlFor="passwordSignUp">Password:</div>
          <input
            className="signUpF"
            type="password"
            name="password"
          />
          <div htmlFor="password">Re-Enter Password:</div>
          <input
            className="signUpF"
            type="password"
            name="password"
          />
        </div>
        <div className="terms">
          <p className="conditions">
            {' '}
            By checking sign up, I accept{' '}
            <strong>Kaylees TERMS OF USE</strong> and acknowledge having
            read its Privay Policy and Etiquette Policy
          </p>
        </div>
        <p className="signInLink">
        Already have an account?{' '}
        <Link to="/login" className="signLink">
          Sign In
        </Link>
      </p>
        <div className="signButton">
          <button className="signUpButton" type="submit">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </>
);
};
export default SignUp
