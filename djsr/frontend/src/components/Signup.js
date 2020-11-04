import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signupThunk } from "../actions/auth";

export default function Signup() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupThunk(username, email, password));
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name='username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username ? errors.username : null}
        </label>
        <label>
          email
          <input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email ? errors.email : null}
        </label>
        <label>
          Password
          <input
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password ? errors.password : null}
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
