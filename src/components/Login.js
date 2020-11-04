import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authLogin } from "../store/actions/auth";

export default function LoginForm() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(username, password));
  };

  if (token) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <h2>Log-in to your account</h2>
      {error && <p>{error.message}</p>}
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name='username'
            icon='user'
            placeholder='Username'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            icon='lock'
            placeholder='Password'
            type='password'
          />

          <button color='teal' size='large' disabled={loading}>
            Login
          </button>
        </form>
        <p>
          New to us? <NavLink to='/signup'>Sign Up</NavLink>
        </p>
      </React.Fragment>
    </>
  );
}
