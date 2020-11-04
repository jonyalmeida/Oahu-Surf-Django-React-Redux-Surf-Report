import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import { authSignup } from "../store/actions/auth";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authSignup(username, email, password1, password2));
  };

  if (token) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <h2>Signup to your account</h2>
      {error && <p>{error.message}</p>}
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name='username'
            placeholder='Username'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            placeholder='E-mail address'
          />
          <input
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
            name='password1'
            placeholder='Password'
            type='password'
          />
          <input
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            name='password2'
            placeholder='Confirm password'
            type='password'
          />

          <button color='teal' size='large' disabled={loading}>
            Signup
          </button>
        </form>
        <p>
          Already have an account? <NavLink to='/login'>Login</NavLink>
        </p>
      </React.Fragment>
    </>
  );
}
