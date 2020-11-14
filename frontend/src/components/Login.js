import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../store/actions/auth";

export default function LoginForm(props) {
    const dispatch = useDispatch();

    const loggedOut = useSelector((state) => !state.auth.id);
    const loading = useSelector((state) => state.auth.loading);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        value: false,
        username: "",
        password: "",
    });

    let errs = {};

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            errs.value = true;
            if (!username) errs.username = "Please enter your username.";
            if (!password) errs.password = "Please enter your password.";
            setErrors(errs);
            return;
        }
        dispatch(login(username, password));
        props.handleCloseModal();
    };

    if (!loggedOut) {
    }

    return (
        <>
            <h2>Log-in to your account</h2>
            {errors.value && (
                <p style={{ color: "red", fontSize: ".8em" }}>
                    {errors.username}
                    <br />
                    {errors.password}
                </p>
            )}
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
                    <button size='large' disabled={loading}>
                        Login
                    </button>
                </form>
                <p onClick={props.handleClick}>
                    Are a new surfer on the block?{" "}
                    <font style={{ textDecoration: "underline" }}>
                        Sign Up here
                    </font>
                    .
                </p>
            </React.Fragment>
        </>
    );
}
