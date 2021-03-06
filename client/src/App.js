import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyPage from "./components/MyPage";
import Footer from "./components/Footer";
import Cams from "./components/Cams";

import { restoreCSRF } from "./store/actions/csrf";
import { getReports } from "./store/actions/reports";
import { setHome } from "./store/actions/nav";
import FetchSurfSpots from "./components/FetchSurfSpots";
import Options from "./components/Options";
import MySpots from "./components/MySpots";

function App() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth);
    const home = useSelector((state) => state.home.home);
    useEffect(() => {
        dispatch(restoreCSRF());
        dispatch(getReports("Oahu"));
        dispatch(setHome("home"));
    }, [dispatch]);

    return (
        <>
            <Topbar />
            <Navbar user={user} />
            {home === "cams" ? (
                <Cams />
            ) : home === "surfspots" ? (
                <FetchSurfSpots />
            ) : home === "options" ? (
                <Options />
            ) : home === "my-spots" ? (
                <MySpots />
            ) : user.id ? (
                <MyPage />
            ) : (
                <Home />
            )}
            <Footer />
        </>
    );
}

export default App;
