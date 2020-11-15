import React, { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import Login from "./Login";
import Signup from "./Signup";
import { logout } from "../store/actions/auth";
import { setHome } from "../store/actions/nav";
import Modal from "./Modal";

import { getReports } from "../store/actions/reports";

ReactModal.setAppElement("body");

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);

    const [modal, setModal] = useState(false);

    const modalOpen = () => {
        console.log("3");
        setModal(true);
    };

    const modalClose = () => {
        console.log("4");
        setModal(false);
    };

    let options;
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
            case "surfspots":
                dispatch(setHome("surfspots"));
                break;
            case "oahu":
                dispatch(getReports("Oahu"));
                dispatch(setHome("home"));

                break;
            case "kauai":
                dispatch(getReports("Kauai"));
                dispatch(setHome("home"));

                break;
            case "maui":
                dispatch(getReports("Maui"));
                dispatch(setHome("home"));
                break;
            case "big-island":
                dispatch(getReports("South Big Island and "));
                break;
            case "about":
                dispatch(setHome("about"));
                break;
            case "options":
                console.log("OPTIONS");
                dispatch(setHome("options"));
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
                                <li id='big-island'>Big Island</li>
                            </ul>
                        </li>
                        <li id='surfspots' onClick={handleNavClick}>
                            More spots
                        </li>
                        {user.id && (
                            <li id='options' onClick={handleNavClick}>
                                My Options
                                <ul className='header--menu-dropdown'>
                                    <li
                                        style={{
                                            textDecoration: "line-through",
                                        }}
                                        id='choose-shore'
                                        onClick={handleNavClick}
                                        disabled={true}>
                                        Pick your shore
                                    </li>
                                    <li
                                        style={{
                                            textDecoration: "line-through",
                                        }}
                                        id='choose-island'
                                        onClick={handleNavClick}>
                                        Pick your island
                                    </li>
                                    <li
                                        style={{
                                            textDecoration: "line-through",
                                        }}
                                        id='addspots'
                                        onClick={handleNavClick}>
                                        Add spots
                                    </li>
                                </ul>
                            </li>
                        )}
                    </ul>
                </nav>
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
