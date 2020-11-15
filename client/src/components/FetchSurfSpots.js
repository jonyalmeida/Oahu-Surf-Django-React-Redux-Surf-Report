import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import "./fetch.css";
import { surfSpots } from "./utils/autocomplete";

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
        ? []
        : Object.keys(surfSpots).filter(
              (surfSpot) =>
                  surfSpot.toLowerCase().slice(0, inputLength) === inputValue
          );
};

const renderSuggestion = (suggestion) => (
    <>
        <ul>{suggestion}</ul>
    </>
);

const theme = {
    input: {
        fontSize: "2em",
        marginLeft: "3%",
        padding: "1%",
        border: "none",
    },
};

export default function FetchSurfSpots() {
    const [n, setN] = useState(616);
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestionValue = (suggestion) => {
        setN(surfSpots[suggestion]);
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
        placeholder: "Look for a surf spot..",
        value,
        onChange: onChange,
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
        </>
    );
}

// const result = {};
// async function displayText(n) {
//     const response = await fetch(
//         `https://thingproxy.freeboard.io/fetch/https://magicseaweed.com/Somewhere-Surf-Report/${n}/`
//     );
//     const html = await response.text();
//     if (
//         html.includes(`class="nomargin page-title"`) &&
//         html.includes(` Surf Report and Forecast`)
//     ) {
//         console.log(
//             html.slice(
//                 html.indexOf(`class="nomargin page-title"`) + 30,
//                 html.indexOf(` Surf Report and Forecast`)
//             )
//         );
//         result[
//             html.slice(
//                 html.indexOf(`class="nomargin page-title"`) + 30,
//                 html.indexOf(` Surf Report and Forecast`)
//             )
//         ] = n;
//     }
// }
// let i = 1;
// const t = setInterval(() => {
//     if (i > 1294) {
//         clearInterval(t);
//         console.log(result);
//         console.log("CSRF", csrf);
//         setTimeout(() => {
//             fetch("api/reports/surfspotslist", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "X-CSRFToken": csrf,
//                 },
//                 credentials: "include",
//                 body: JSON.stringify({ result }),
//             });
//         }, 120000);
//     }
//     displayText(i);
//     i++;
//// // }
