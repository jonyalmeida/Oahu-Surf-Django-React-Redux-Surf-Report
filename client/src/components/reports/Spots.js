import React from "react";

export default function Spots() {
    const spots = [
        { name: "Pipeline", waveHeight: "5-7ft" },
        { name: "Waimea Bay", waveHeight: "9-12ft" },
        { name: "Mokuleia", waveHeight: "3-5ft" },
        { name: "Sunset", waveHeight: "6-8ft" },
    ];

    return (
        <div className='spots'>
            {spots.map((spot) => (
                <div>
                    <h4>{spot.name}</h4>
                    <div className='spots--info'>
                        <p>
                            Glassy with light onshore.
                            <br />
                            <font style={{ fontSize: "1.5em" }}>
                                {spot.waveHeight}
                            </font>
                            <br />
                            <font style={{ fontSize: ".8em" }}>
                                High tides: 8:43am / 18:21pm
                                <br /> Low tides: 14:59pm / 23:17pm
                            </font>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
