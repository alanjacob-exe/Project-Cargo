import "./index.css";

import React from "react";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

export default function Buslist(props) {

  var currentdate = new Date();
  var currentdatetime =
    
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

    console.log(currentdatetime)

  var etatime;
  const navigate = useNavigate();
  const data = props.data;
  const eta=props.eta;
  const etah=Math.trunc(eta/60);
  if (etah>60)
  {

  }
  else{
    etatime=currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();


  }
  const a = localStorage.getItem("busid");
  console.log(a);
  return (
    // <div className="buslist ">
    <div
      className="list"
      onClick={() => {
        localStorage.setItem("busid", data.id);
        localStorage.setItem("busname", data.data.busName);

        console.log(data.id);
        navigate("/seatselection");
      }}
    >
      <div className="name">Bus Name:{props.Name}</div>
      <div className="time">
        <div className="arrival block">Bus No:{data.data.busNumber}</div>
        <br></br>
        <div className="departure">Reaches at:{etah}</div>
      </div>
    </div>
    // </div>
  );
}
