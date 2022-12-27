import React from "react";
import "./index.css";
import { useState } from "react";

 function Ui(props) {
    // const query=props.data;
    // console.log("details"+query.resourceSets[0].resources[0].travelDuration)
    // const [duration,setduration]=useState("00");
    // const [eta, seteta] = useState("")
    // const [traffic, settraffic] = useState('')
    // settraffic(query.resourceSets[0].resources[0].trafficCongestion)
    // setduration(query.resourceSets[0].resources[0].travelDuration)
    // seteta(query.resourceSets[0].resources[0].travelDurationTraffic)
    
    // var eta={props.eta}
    // var etaminutes=eta/60;
    const estimated=props.eta;
    const etaminutes=((estimated)/60).toPrecision(4);
    const Arrival=props.duration;
    const arrrivalminutes=((Arrival)/60).toPrecision(4)

    
  return (
    <div className="container bg-glass">
      <div className="section1">
        <div className="top">Source: {props.source}</div>
        <div className="down">Destination: {props.destination}</div>
      </div>
      <div className="section2">
        <div className="top">Duration: {arrrivalminutes} mins</div>
        <div className="down">Estimated Arrival: {etaminutes} mins</div>
      </div>
      <div className="section3">
        <div className="top">Traffic: {props.traffic}</div>
        <div className="down">Distance: {(props.distance)} Kms</div>
      </div>
    </div>
  );
}

export default Ui;
