import "./index.css";

import React from "react";
import { Button } from "bootstrap";

export default function Buslist(props) {
  

  return (
    // <div className="buslist ">
      <div className="list">
        <div className="name">Name:{props.Name}</div>
        <div className="time">
          <div className="arrival">Arrival:{}</div>
          <div className="departure">Reaches at:{}
          </div>
        </div>
      </div>
    // </div>
  );
}
