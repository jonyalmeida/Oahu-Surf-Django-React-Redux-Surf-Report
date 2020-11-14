import React from "react";

export default function Shore({ shore, report }) {
    return (
        <>
            <div className='main--content--other-shores-each'>
                <h3 style={{ textDecoration: "underline" }}>
                    {report[shore].name}
                </h3>
                <div className='main--content--other-shores-today'>
                    <p style={{ fontSize: ".5em" }}>{report.today}</p>
                    <p>
                        {report.dayPeriod1.toLowerCase()}&nbsp;
                        {report[shore].surfHeights1}
                        <br />
                        {report.dayPeriod2.toLowerCase()}&nbsp;
                        {report[shore].surfHeights2}
                    </p>
                </div>
                <div className='main--content--other-shores-tomorrow'>
                    <p style={{ fontSize: ".5em" }}>{report.tomorrow}</p>
                    <p>
                        {report.dayPeriod3.toLowerCase()}
                        {report[shore].surfHeights3}
                        <br />
                        {report.dayPeriod4.toLowerCase()}
                        {report[shore].surfHeights4}
                    </p>
                </div>
            </div>
        </>
    );
}
