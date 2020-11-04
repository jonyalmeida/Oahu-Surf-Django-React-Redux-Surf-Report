import React from "react";

export default function Home() {
  return (
    <>
      <h1>Oahu Surf Report</h1>
      <div className='container'>
        <div className='header'>
          <h3>Wednesday, 04 November 2020</h3>
          <h2>85°F Sunny - SSE Winds - Rising</h2>
        </div>
        <div className='sides'>North Shore</div>
        <div className='sides'>Shouth Shore</div>
        <div className='sides'>East Side</div>
        <div className='sides'>West Side</div>
      </div>
    </>
  );
}
