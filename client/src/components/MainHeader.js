import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import { degreeToCompass } from "./utils/utils";

export default function MainHeader() {
    const [temp, setTemp] = useState("");
    const [windDirection, setWindDirection] = useState("");
    const [windSpeed, setWindSpeed] = useState("");

    useEffect(() => {
        (async function () {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Honolulu&appid=55354e63af68b2c28a06b2baf5394d86&units=imperial`
            );
            const data = await response.json();
            setTemp(data.main.temp);
            setWindDirection(degreeToCompass(data.wind.deg));
            setWindSpeed(Math.ceil(data.wind.speed));
        })();
    }, [temp, windDirection, windSpeed]);

    return (
        <div className='main--header'>
            <Clock />
            <h3>
                <font style={{ color: "#fc4e03", fontSize: "1.5em" }}>
                    {Math.ceil(temp)}°F
                </font>{" "}
                <font style={{ fontSize: "2em" }}>☀️</font> {windSpeed} mph{" "}
                {windDirection} Winds - Tide Rising
            </h3>
        </div>
    );
}

function Clock() {
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [weekDay, setWeekDay] = useState("Sunday");
    const [days, setDays] = useState(1);
    const [month, setMonth] = useState("January");
    const [year, setYear] = useState(2020);

    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December",
    ];

    setInterval(() => {
        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
        setWeekDay(week[date.getDay()]);
        setDays(date.getDate());
        setMonth(months[date.getMonth()]);
    });

    return (
        <h3 style={{ marginTop: "-1%" }}>
            <font style={{ color: "#fc4e03", fontSize: "1.5em" }}>
                {hours < 10 ? `0${hours}` : hours}:
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </font>{" "}
            {weekDay}, {days < 10 ? `0${days}` : days} {month} {year}
        </h3>
    );
}
