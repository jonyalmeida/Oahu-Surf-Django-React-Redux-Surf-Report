import React, { useState } from "react";

export default function Options() {
    const [selected, setSelected] = useState({
        oahu: "",
        maui: "",
        kauai: "",
        "big-island": "",
    });

    const addSelect = (e) => {
        e.stopPropagation();
        console.log("ONCLICK");
        const selectedCopy = { ...selected };
        console.log(e.target.id, selectedCopy);
        for (let value of Object.keys(selectedCopy)) {
            if (e.target.id === value) {
                console.log(value);
                selectedCopy[value] = "selected";
            } else {
                selectedCopy[value] = "";
            }
            setSelected(selectedCopy);
        }
    };

    setTimeout(() => {
        (function appendJSTag() {
            const text = `
        var shores = $(".all-shores");
        shores.sortable({
            axis: "x",
            revert: 300,
            placeholder: "sortable-placeholder",
            cursor: "move",
            tolerance: "pointer",
            start: function () {
                shores.addClass("sorting");
            },
            stop: function () {
                shores.addClass("sort-stop").removeClass("sorting");
                setTimeout(function () {
                    shores.removeClass("sort-stop");
                }, 310);
            },
        });`;
            const script = document.createElement("script");
            script.innerText = text;
            document.body.append(script);
        })();
    }, 1000);

    return (
        <>
            <div className='options'>
                <div className='option-box options--shores'>
                    <h2>Pick the order you want to see the shores:</h2>
                    <div className='all-shores'>
                        <div className='shore option'>North Shore</div>
                        <div className='shore option'>West Side</div>
                        <div className='shore option'>East Side</div>
                        <div className='shore option'>South Shore</div>
                    </div>
                </div>
                <div className='option-box options--island'>
                    <h2>Pick your island:</h2>
                    <div className='all-islands'>
                        <div
                            id='oahu'
                            className={`island option ${selected.oahu}`}
                            onClick={addSelect}>
                            Oahu
                        </div>
                        <div
                            id='maui'
                            className={`island option ${selected.maui}`}
                            onClick={addSelect}>
                            Maui
                        </div>
                        <div
                            id='kauai'
                            onClick={addSelect}
                            className={`island option ${selected.kauai}`}>
                            Kauai
                        </div>
                        <div
                            id='big-island'
                            onClick={addSelect}
                            className={`island option ${selected["big-island"]}`}>
                            Big Island
                        </div>
                    </div>
                </div>
                <div className='option-box options--add-spots'></div>
            </div>
        </>
    );
}
