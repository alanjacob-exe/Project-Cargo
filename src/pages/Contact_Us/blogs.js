import React from "react";
import BingMap from "../../Components/BingMaps/BingMaps";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./blogs.css";
import Navbar from "../../Components/Navbar";





 function hello(var1,var2) {
//  console.log(props)
 const add=var1+var2;
 const sub=var1-var2;
 const mult=var1*var2;
 const arr=[add,sub,mult]

  return (arr);
}

const variable=hello(50,50);
console.log(variable);

const Blogs = () => {

  
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
        
        <h1>Welcome to Project Cargo Events</h1>
		</div></div>
      
    </div>
  );
};

export default Blogs;
