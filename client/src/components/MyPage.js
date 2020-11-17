import React from "react";
import { useSelector } from "react-redux";

import MainHeader from "./MainHeader";
import Shore from "./reports/Shores";

export default function MyPage() {
    const report = useSelector((state) => state.reports);
    const userShoreOrder = useSelector((state) => state.auth.shore_order);

    if (!report[userShoreOrder[0]]) return null;

    return (
        <>
            {" "}
            {report[userShoreOrder[0]] && (
                <div className='main'>
                    <MainHeader />
                    <div>
                        <div className='main--content--report'>
                            <div className='main--content--report-stats'>
                                <h3>&nbsp;&nbsp;&nbsp;{report.today}</h3>
                                <div className='main--content--report-daily'>
                                    <div>
                                        {report.dayPeriod1.toLowerCase()}
                                        &nbsp;&nbsp;
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <font style={{ fontSize: "4em" }}>
                                            {
                                                report[userShoreOrder[0]]
                                                    .surfHeights1
                                            }
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
                                            {
                                                report[userShoreOrder[0]]
                                                    .surfHeights2
                                            }
                                        </font>
                                    </p>
                                </div>
                            </div>
                            <div className='main--content--report-stats right'>
                                <h3>&nbsp;&nbsp;&nbsp;{report.tomorrow}</h3>
                                <div className='main--content--report-daily'>
                                    <div>
                                        {report.dayPeriod3.toLowerCase()}
                                        &nbsp;&nbsp;
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <font style={{ fontSize: "2em" }}>
                                            {
                                                report[userShoreOrder[0]]
                                                    .surfHeights3
                                            }
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
                                            {
                                                report[userShoreOrder[0]]
                                                    .surfHeights4
                                            }
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
                            <h2>{report[userShoreOrder[0]].name}</h2>
                            <p>{report.discussion}</p>
                            <div className='main--content--description--widgets'>
                                <div className='weather--widgets'>
                                    <h3>💨&nbsp;{report.winds}</h3>
                                </div>
                                <div className='weather--widgets'>
                                    <h3>
                                        🌤&nbsp;{report.weather.current.text}
                                    </h3>
                                </div>
                                <div className='weather--widgets'>
                                    <h3>
                                        🌡&nbsp;{report.weather.current.high}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main--content--other-shores'>
                        {userShoreOrder.slice(1).map((shore, i) => (
                            <Shore key={i} shore={shore} report={report} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
