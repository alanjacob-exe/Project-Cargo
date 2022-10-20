import React from "react";
import BingMap from "../../Components/BingMaps/BingMaps";
import Openstreetmaps from "../../Components/Openstreetmaps/Osm";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./blogs.css";
import Navbar from "../../Components/Navbar";

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
