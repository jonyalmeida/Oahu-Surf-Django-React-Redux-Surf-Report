import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const err = useSelector((state) => state.errors.auth);

  const loggedOut = useSelector((state) => !state.user);

  if (!loggedOut) {
    return <Redirect to='/' />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A username and password was submitted!" + username + " " + password);
    dispatch(login(email, password));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name='username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
