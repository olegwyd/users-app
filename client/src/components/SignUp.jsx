import React from 'react';
import { Link } from 'react-router-dom';

const signUp = () => {
  return (
    <div className="sign-up">
      <h2 className="sign-up__header">Create your account</h2>
      <form name="createUser" className="sign-up__form">
        <label htmlFor="userName" className="form__label">
          Username
        </label>
        <input type="text" className="form__input" id="userName" />

        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input type="email" className="form__input" id="email" />

        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" id="password" />

        <div className="isAdmin-container">
          <input type="checkbox" id="is-admin" className="form__is-admin" />
          <label htmlFor="is-admin">is admin</label>
        </div>

        <input type="button" value="Sign Up" className="form__button" />

        <Link to="/signIn">
          <span className="sign-in-button">To Sign In</span>
        </Link>
      </form>
    </div>
  );
};

export default signUp;
