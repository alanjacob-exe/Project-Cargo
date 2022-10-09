import React from "react";
import CurrentLocation from "../Components/Location/CurrentLocation";

import Geolocation from "../Components/Location/CurrentLocation";

const Teams = () => {
  const location = CurrentLocation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Left",
        alignItems: "Right",
        height: "100vh",
        backgroundColor: "#0A1D2E",
        color: "#fff",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <h1>Welcome to GeeksforGeeks pack</h1>
        <div>
          {location.loaded
            ? JSON.stringify(location)
            : "Location data not available"}
        </div>
      </div>
    </div>
  );
};

export default Teams;
