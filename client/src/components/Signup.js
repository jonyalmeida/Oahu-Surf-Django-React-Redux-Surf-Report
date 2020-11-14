import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import { signup } from "../store/actions/auth";

export default function RegistrationForm(props) {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const [errors, setErrors] = useState({
        value: false,
        username: "",
        password1: "",
        password2: "",
        match: "",
    });

    let errs = {};

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password1 || !email || !password2) {
            errs.value = true;
            if (!username) errs.username = "Please enter a username.";
            if (!password1) errs.password1 = "Please enter a password.";
            if (!password2) errs.password2 = "Please confirm your password.";

            if (password1 !== password2) errs.match = "Passwords don't match.";

            setErrors(errs);
            return;
        }

        dispatch(signup(username, email, password1));
        props.handleCloseModal();
    };

    return (
        <>
            <h2>Signup to your account</h2>
            {errors && (
                <p style={{ color: "red", fontSize: ".8em" }}>
                    {errors.username}
                    <br />
                    {errors.password1}
                    <br />
                    {errors.match}
                </p>
            )}
            <React.Fragment>
                <form method='POST' onSubmit={handleSubmit}>
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
                    />{" "}
                    <br />
                    <input
                        onChange={(e) => setPassword1(e.target.value)}
                        value={password1}
                        name='password'
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
                    <button size='large' disabled={loading}>
                        Signup
                    </button>
                </form>
                <p onClick={props.handleClick}>
                    Already have an account?{" "}
                    <font style={{ textDecoration: "underline" }}>Login</font>{" "}
                </p>
            </React.Fragment>
        </>
    );
}
