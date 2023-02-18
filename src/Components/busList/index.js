import "./index.css";

import React from "react";
import { Button } from "bootstrap";

export default function Buslist({ Name, arrival, dest }) {
  return (
    // <div className="buslist ">
      <div className="list">
        <div className="name">{Name}</div>
        <div className="time">
          <div className="arrival">Arrival:{arrival}</div>
          <div className="departure">Reaches at:{dest}
          </div>
        </div>
      </div>
    // </div>
  );
}
