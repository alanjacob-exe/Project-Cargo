import React from "react";
import DestinationComplete from "../../Components/Autocomplete/DestinationAutocomplete";
import SourceComplete from "../../Components/Autocomplete/SourceAutocomplete";
import Footer from "../../Components/Footer";
import "./annual.css";
import GeoLocation from "../../Components/Location/CurrentLocation";
//import { FaBusAlt } from "react-icons/fa";
import Map from "../../Components/GoogleMap/GoogleMap";
import CurrentLocation from "../../Components/Location/CurrentLocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "../../Components/Navbar";

//import { useState } from "react";

const AnnualReport = () => {
  const location = CurrentLocation();

  // const [state, setState] = useState({
  //   fname: "",
  //   lname: "",
  // });

  // const handleChange = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
        <Navbar />

        <div className="margin">
          <h1>Welcome to Location Page</h1>
          <div>
            {location.loaded
              ? JSON.stringify(location)
              : "Location data not available"}
          </div>
          <div>
            <MapContainer
              center={[10.95590759312288, 76.22946062699094]}
              zoom={13}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
                url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2
            "
              />
            </MapContainer>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
      {/* </div>
      <div>
        <form>
          <label>
            Source:{" "}
            <input
              type="text"
              name="fname"
              value={state.fname}
              onChange={handleChange}
              style={{ color: "#000" }}
            />
          </label>{" "}
          <label>
            Destination:{" "}
            <input
              type="text"
              name="lname"
              value={state.lname}
              onChange={handleChange}
              style={{ color: "#000" }}
            />
          </label>
        </form>
        <h5>Source: {state.fname}</h5>
        <h5>Destination: {state.lname}</h5>
      </div> */}

>>>>>>> 852137e0af15c8dcb87fba9870703d7e8d371196
    </div>
  );
};

export default AnnualReport;
