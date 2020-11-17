import React, { useState } from "react";
import { useSelector } from "react-redux";
import Autosuggest from "react-autosuggest";
import "./fetch.css";

export default function MySpots() {
    const mySpots = useSelector((state) => state.auth.my_spots);
    console.log(mySpots);
    const [n, setN] = useState(mySpots[0].id);
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const theme = {
        input: {
            fontSize: "2em",
            marginLeft: "3%",
            padding: "1%",
            border: "none",
        },
    };

    const mySpotsList = (function () {
        const list = [];
        for (let key in mySpots) {
            list.push(mySpots[key].name);
        }
        return list;
    })();

    console.log(mySpotsList);
    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0
            ? []
            : mySpotsList.filter(
                  (surfSpot) =>
                      surfSpot.toLowerCase().slice(0, inputLength) ===
                      inputValue
              );
    };

    const renderSuggestion = (suggestion) => (
        <>
            <ul>{suggestion}</ul>
        </>
    );

    const getSuggestionValue = (suggestion) => {
        setN(mySpots[suggestion]);
        return suggestion;
    };

    const onChange = (e, { newValue }) => {
        setValue(newValue);
    };
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: "Search my spots..",
        value,
        onChange: onChange,
    };

    const listIds = (function () {
        const list = [];
        for (let key in mySpots) {
            list.push(mySpots[key].id);
        }
        return list.sort();
    })();

    const handleClick = (e) => {
        console.log(listIds);
        console.log("CLICK");
        console.log(n);
        if (e.target.id === "left" && listIds[listIds.indexOf(n)] !== 0)
            setN(listIds[listIds.indexOf(n) - 1]);
        if (
            e.target.id === "right" &&
            listIds.indexOf(n) !== listIds.length - 1
        ) {
            console.log(listIds.indexOf(n));
            console.log(listIds[listIds.indexOf(n) + 1]);
            setN(listIds[listIds.indexOf(n) + 1]);
        }
    };

    return (
        <>
            <div className='autosugest'>
                <div
                    style={{
                        borderBottom: "3px solid rgb(4, 119, 206)",
                        maxHeight: "75px",
                    }}>
                    <Autosuggest
                        theme={theme}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={
                            onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                            onSuggestionsClearRequested
                        }
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
            </div>
            <div>
                <p
                    id='left'
                    onClick={handleClick}
                    style={{
                        position: "absolute",
                        left: "3%",
                        top: "25%",
                        zIndex: "200",
                        borderRadius: "75%",
                        backgroundColor: "#349beb",
                        color: "white",
                        padding: "1%",
                        fontSize: "1.4em",
                    }}>
                    &lt;
                </p>
                <div className='iframe-div'>
                    <iframe
                        className='iframe'
                        title='report'
                        scrolling='no'
                        src={`https://magicseaweed.com/Punta-Palmar-San-Carlos-Surf-Report/${n}/`}
                        style={{ border: "1px #ffffff solid" }}
                        name='myiFrame'
                        frameBorder='no'
                        height='1200px'
                        width='1800px'></iframe>
                </div>
                <div className='iframe-footer'>
                    <iframe
                        className='iframe2'
                        title='report2'
                        scrolling='no'
                        src={`https://magicseaweed.com/Punta-Palmar-San-Carlos-Surf-Report/${n}/#tab-7day`}
                        style={{ border: "1px #ffffff solid" }}
                        name='myiFrame2'
                        frameBorder='no'
                        height='1200px'
                        width='1800px'></iframe>
                </div>
                <div className='iframe-side'></div>
                <p
                    id='right'
                    onClick={handleClick}
                    style={{
                        position: "absolute",
                        right: "3%",
                        top: "25%",
                        zIndex: "200",
                        borderRadius: "75%",
                        backgroundColor: "#349beb",
                        color: "white",
                        padding: "1%",
                        fontSize: "1.4em",
                    }}>
                    &gt;
                </p>
            </div>
        </>
    );
}
