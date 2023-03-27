import "./index.css";

import React from "react";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

export default function Buslist(props) {
  const navigate = useNavigate();
  const data = props.data;
const a= localStorage.getItem("busid");
console.log(a)
  return (
    // <div className="buslist ">
    <div
      className="list"
      onClick={() => {
        localStorage.setItem("busid", data.id);
        localStorage.setItem("busname", data.data.busName);

        
        console.log(data.id)
        navigate("/seatselection")
      }}
    >
      <div className="name">Name:{props.Name}</div>
      <div className="time">
        <div className="arrival">Bus No:{data.data.busNumber}</div>
        <div className="departure">Reaches at:{data.data.busName}</div>
      </div>
    </div>
    // </div>
  );
}
