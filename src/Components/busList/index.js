import "./index.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Buslist(props) {
  var currentdate = new Date();
  var currentdatetime =
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();


  var etatime;
  const navigate = useNavigate();
  const data = props.data;
  const eta = props.eta;
  const etah = Math.trunc(eta / 60);

  const [time, settime] = useState("");
  


  const etaCalculator = (props) => {
    var d = new Date(); // get current date
    d.setHours(d.getHours(), d.getMinutes() + props, 0, 0);
    settime(d.toLocaleTimeString());
    return d.toLocaleTimeString()
  };

  useEffect(() => {
    etaCalculator(etah)
  }, [etah])

  const a = localStorage.getItem("busid");
  return (
    // <div className="buslist ">
    <div
      className="list"
      onClick={() => {
        localStorage.setItem("busid", data.id);
        localStorage.setItem("busname", data.data.busName);

        navigate("/seatselection");
      }}
    >
      <div className="name">Bus Name:{props.Name}</div>
      <div className="time">
        <div className="arrival block">Bus No:{data.data.busNumber}</div>
        <br></br>
        <div className="departure">Reaches at:{time}</div>
      </div>
    </div>
    // </div>
  );
}
