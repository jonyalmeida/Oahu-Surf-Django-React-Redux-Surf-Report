import React from "react";

export default function Shores(props) {
    return (
        <>
            <div className='shores--info'>
                <span>Wind 9mph SSW</span>
                <span>
                    <h2 className='shores--title'>{props.shore}</h2>
                    <font style={{ fontSize: "5em" }}>4-6ft</font>
                </span>
                <span>Good to Excellent</span>
            </div>
        </>
    );
}
