import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Hello from "./Hello";
import { logoutThunk } from "../actions/auth";

export default function App() {
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <div className='site'>
      <nav>
        <NavLink className={"nav-link"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"nav-link"} to={"/login"}>
          Login
        </NavLink>
        <NavLink className={"nav-link"} to={"/signup"}>
          Signup
        </NavLink>
        <NavLink className={"nav-link"} to={"/hello/"}>
          Hello
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <main>
        <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/hello"} component={Hello} />
          <Route path={"/"} render={() => <div>Home again</div>} />
        </Switch>
      </main>
    </div>
  );
}
