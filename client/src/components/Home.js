import React from "react";
import { useSelector } from "react-redux";

import MainHeader from "./MainHeader";
import Shore from "./reports/Shores";

export default function Home() {
    const report = useSelector((state) => state.reports);

    if (!report.north) return null;
    return (
        <div className='main'>
            <MainHeader />
            <div>
                <div className='main--content--report'>
                    <div
                        className='main--content--report-stats'
                        style={{ paddingRight: "5%" }}>
                        <h3>&nbsp;&nbsp;&nbsp;{report.today}</h3>
                        <div className='main--content--report-daily'>
                            <div>
                                {report.dayPeriod1.toLowerCase()}
                                &nbsp;&nbsp;
                            </div>
                            <p style={{ textAlign: "center" }}>
                                <font style={{ fontSize: "4em" }}>
                                    {report.north.surfHeights1}
                                </font>
                            </p>
                        </div>
                        <div className='main--content--report-daily'>
                            <div>
                                {report.dayPeriod2.toLowerCase()}
                                &nbsp;
                            </div>
                            <p style={{ textAlign: "center" }}>
                                <font style={{ fontSize: "4em" }}>
                                    {report.north.surfHeights2}
                                </font>
                            </p>
                        </div>
                    </div>
                    <div className='main--content--report-stats right'>
                        <h3 style={{ fontSize: ".8em" }}>
                            &nbsp;&nbsp;&nbsp;{report.tomorrow}
                        </h3>
                        <div className='main--content--report-daily'>
                            <div>
                                {report.dayPeriod3.toLowerCase()}
                                &nbsp;&nbsp;
                            </div>
                            <p style={{ textAlign: "center" }}>
                                <font style={{ fontSize: "2em" }}>
                                    {report.north.surfHeights3}
                                </font>
                            </p>
                        </div>
                        <div className='main--content--report-daily'>
                            <div>
                                {report.dayPeriod4.toLowerCase()}
                                &nbsp;
                            </div>
                            <p style={{ textAlign: "center" }}>
                                <font style={{ fontSize: "2em" }}>
                                    {report.north.surfHeights4}
                                </font>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='main--content--report-tides'>
                    {report.tides}
                </div>
            </div>
            <div className='main--content'>
                <div className='main--content--description'>
                    <h2>North Shore</h2>
                    <p>{report.discussion}</p>
                    <div className='main--content--description--widgets'>
                        <div className='weather--widgets'>
                            <h3>💨&nbsp;{report.winds}</h3>
                        </div>
                        <div className='weather--widgets'>
                            <h3>🌤&nbsp;{report.weather.current.text}</h3>
                        </div>
                        <div className='weather--widgets'>
                            <h3>🌡&nbsp;{report.weather.current.high}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main--content--other-shores'>
                {report.north &&
                    ["south", "west", "east"].map((shore, i) => (
                        <Shore key={i} shore={shore} report={report} />
                    ))}
            </div>
        </div>
    );
}
