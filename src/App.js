import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import xmlJs from "xml-js";
import xmlJsonify from "xml-jsonify";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
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
    let surfInfo;
    const data = (async () => {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.weather.gov/source/hfo/xml/SurfState.xml",
        {
          headers: {
            "Content-Type": "application/xml",
          },
        }
      );

      const data2 = await response.text();
      const data = xmlJsonify(data2, (err, data) => {
        console.log(err || data);
      });
      console.log("response", data);
    })();
    console.log(surfInfo);
  }, []);

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
