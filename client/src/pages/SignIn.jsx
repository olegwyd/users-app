import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2 className="sign-up__header">Sign In</h2>
      <form name="createUser" className="sign-in__form">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input type="email" className="form__input" />

        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" />

        <input type="submit" value="Sign In" className="form__button" />

        <Link to="/">
          <span className="sign-in-button">Sign Up</span>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
