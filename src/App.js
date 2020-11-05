import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
    });

    return (
        <div>
            <img id='logo' src='images/surf-logo.png' />
            <BrowserRouter>
                <nav>
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
                </nav>
                <main>
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
