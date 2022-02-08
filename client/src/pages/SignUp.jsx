import React from 'react';
import { Link } from 'react-router-dom';
import { registration } from '../http/userApi';

const SignUp = () => {
  const createUser = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const isAdmin = e.target[3].checked ? 'ADMIN' : 'USER';

    const user = await registration(userName, email, password, isAdmin);
    console.log(user);
  };

  return (
    <div className="sign-up">
      <h2 className="sign-up__header">Create your account</h2>
      <form
        name="createUser"
        className="sign-up__form"
        onSubmit={(e) => createUser(e)}
      >
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

        <input type="submit" value="Sign Up" className="form__button" />

        <Link to="/signIn">
          <span className="sign-in-button">Sign In</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
