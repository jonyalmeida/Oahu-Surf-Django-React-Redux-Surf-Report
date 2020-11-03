import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function App() {
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
      </nav>
      <main>
        <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Signup} />
          <Route path={"/"} render={() => <div>Home again</div>} />
        </Switch>
      </main>
    </div>
  );
}
