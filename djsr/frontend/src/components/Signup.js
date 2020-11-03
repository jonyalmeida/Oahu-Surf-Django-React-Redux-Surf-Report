import React from "react";
import { useDispatch } from "react-redux";

import { signup } from "../actions/auth";

export default function Signup() {
  const dispatch = useDispatch();

  const [username, setUsername] = setState("");
  const [email, setEmail] = setState("");
  const [password, setPassword] = setState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "A user is creating an account " + username + " " + email + " " + password
    );
    dispatch(signup(username, email, password));
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
        </label>
        <label>
          email
          <input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
