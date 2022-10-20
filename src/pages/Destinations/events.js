import React from "react";
import Navbar from "../../Components/Navbar";
import './event.css'
const Events = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "Left",
          alignItems: "Right",
          height: "100vh",
          backgroundColor: "#0A1D2E",
          marginTop: "-2px",
          color: "#fff",
        }}
      >
        <Navbar/>
      <div className="margin">
        <h1> transport maps</h1>
		</div></div>
      
    </div>
  );
};

export default Events;
