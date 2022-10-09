import React from "react";
import BingMap from "../../Components/BingMaps/BingMaps";
import Map from "../../Components/GoogleMap/GoogleMap";
import "./blogs.css";

const Blogs = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Left",
        height: "100vh",
      }}
    >
      <div className="top">
        <h1>Contact US</h1>
        <div>Implementing Bing maps Insted of Google Maps</div>
        <div className="container">
          <div className="maps">
            <BingMap/>

          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Blogs;
