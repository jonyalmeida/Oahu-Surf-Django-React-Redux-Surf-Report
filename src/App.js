import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import { logout, authCheckState } from "./store/actions/auth";

export default function App() {
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.auth.token !== null);

  const clickLogout = () => {
    dispatch(logout());
  };

  const onTryAutoSignup = () => dispatch(authCheckState());

  useEffect(() => {
    onTryAutoSignup();
  });

  return (
    <div>
      <BrowserRouter>
        <nav>
          <div>
            <NavLink to='/'>Home</NavLink>
            {authenticated ? (
              <a href='#' onClick={clickLogout}>
                Logout
              </a>
            ) : (
              <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
              </>
            )}
          </div>
        </nav>
        <main>
          <h1>MAIN</h1>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
