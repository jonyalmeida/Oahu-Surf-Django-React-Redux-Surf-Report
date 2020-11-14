import React, { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import Login from "./Login";
import Signup from "./Signup";
import { logout } from "../store/actions/auth";
import { setHome } from "../store/actions/nav";

import AutoCompleteInput from "./googlemaps/AutoCompleteInput";

ReactModal.setAppElement("body");

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);

    const [showModal, setShowModal] = useState(false);
    const [displayLoginSignup, setDisplayLoginSignup] = useState(false);

    const handleOpenModal = (e) => {
        setShowModal(true);
        if (e.target.id === "login") {
            setDisplayLoginSignup(true);
        }
        if (e.target.id === "signup") {
            setDisplayLoginSignup(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleClick = (e) => {
        if (e.target.id === "loginn") setDisplayLoginSignup(true);
        if (e.target.id === "signupp") setDisplayLoginSignup(false);
        else {
            setDisplayLoginSignup(!displayLoginSignup);
        }
    };

    const clickLogout = () => {
        dispatch(logout());
    };

    const handleNavClick = (e) => {
        switch (e.target.id) {
            case "home":
                dispatch(setHome("home"));
                break;
            case "cams":
                dispatch(setHome("cams"));
                break;
            case "oahu":
                dispatch(setHome("home"));
                break;
            case "kauai":
                dispatch(setHome("home"));
                break;
            case "maui":
                dispatch(setHome("home"));
                break;
            case "big-island":
                dispatch(setHome("home"));
                break;
            case "about":
                dispatch(setHome("about"));
                break;
            default:
                return;
        }
    };

    return (
        <>
            <div className='header'>
                <div className='header--logo'>
                    <h1 id='home' onClick={handleNavClick}>
                        iSurf
                    </h1>
                </div>
                <nav className='header--menu'>
                    <ul>
                        <li id='cams' onClick={handleNavClick}>
                            Cams
                        </li>
                        <li>
                            Forecast
                            <ul className='header--menu-dropdown'>
                                <li id='oahu' onClick={handleNavClick}>
                                    Oahu
                                </li>
                                <li id='kauai' onClick={handleNavClick}>
                                    Kauai
                                </li>
                                <li id='maui' onClick={handleNavClick}>
                                    Maui
                                </li>
                                <li id='big-island' onClick={handleNavClick}>
                                    Big Island
                                </li>
                            </ul>
                        </li>
                        <li id='about' onClick={handleNavClick}>
                            About
                        </li>
                    </ul>
                </nav>
                <div className='header--searchbar'>
                    <form method='POST'>
                        <label name='search'>Search bar </label>
                        <AutoCompleteInput />
                    </form>
                </div>
                <div className='header--auth-links'>
                    {user.id ? (
                        <>
                            <button onClick={clickLogout}>Sign Out</button>
                        </>
                    ) : (
                        <>
                            <button id='login' onClick={handleOpenModal}>
                                Login
                            </button>
                            <button id='signup' onClick={handleOpenModal}>
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div>
                <ReactModal
                    isOpen={showModal}
                    contentLabel='onRequestClose Example'
                    disableAutoFocus={true}
                    onRequestClose={handleCloseModal}
                    className='modal'
                    overlayClassName='Overlay'>
                    {displayLoginSignup ? (
                        <Login
                            handleClick={handleClick}
                            handleCloseModal={handleCloseModal}
                        />
                    ) : (
                        <Signup
                            handleClick={handleClick}
                            handleCloseModal={handleCloseModal}
                        />
                    )}
                </ReactModal>
            </div>
        </>
    );
}
