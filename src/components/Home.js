import React, { useState } from "react";

import Shores from "./reports/Shores";
import Spots from "./reports/Spots";

export default function Home() {
    const [northShore, setNorthShore] = useState({ show: "shore" });
    const [southShore, setSouthShore] = useState({ show: "shore" });
    const [eastShore, setEastShore] = useState({ show: "shore" });
    const [westShore, setWestShore] = useState({ show: "shore" });

    const shores = [
        { name: northShore, title: "North Shore" },
        { name: southShore, title: "South Shore" },
        { name: eastShore, title: "East Side" },
        { name: westShore, title: "West Side" },
    ];

    const clickHandle = (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case "North-left":
                setNorthShore({ show: "shore" });
                return;
            case "North-right":
                setNorthShore({ show: "spots" });
                return;
            case "South-left":
                setSouthShore({ show: "shore" });
                return;
            case "South-right":
                setSouthShore({ show: "spots" });
                return;
            case "East-left":
                setEastShore({ show: "shore" });
                return;
            case "East-right":
                setEastShore({ show: "spots" });
                return;
            case "West-left":
                setWestShore({ show: "shore" });
                return;
            case "West-right":
                setWestShore({ show: "spots" });
                return;
        }
    };

    return (
        <>
            <div className='wrapper'>
                <div className='container'>
                    <div className='header'>
                        <h3>Wednesday, 04 November 2020</h3>
                        <h2>85°F Sunny - SSE Winds - Rising</h2>
                    </div>
                    {shores.map((shore, i) => (
                        <div id={i} className='container--info'>
                            <img
                                className='arrow-wave'
                                id={`${shore.title.split(" ")[0]}-left`}
                                src='/images/wave-512.png'
                                onClick={clickHandle}
                            />
                            {shore.name.show === "shore" ? (
                                <Shores shore={shore.title} />
                            ) : (
                                <Spots />
                            )}
                            <img
                                className='arrow-wave'
                                id={`${shore.title.split(" ")[0]}-right`}
                                src='/images/wave-512-reverse.png'
                                onClick={clickHandle}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
