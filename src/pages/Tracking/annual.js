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
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { margin } from "@mui/system";

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

  

    const lat = location.coordinates.lat;
    const lng = location.coordinates.lng;
    console.log(lat, lng);
    if(lat==''&&lng==''){
      console.log("error");
    }

  return (
    <div className="height width color top ">
          <Navbar />
      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

      <div >
      <MDBCard className='my-5 bg-glass' style={{height:'100vh',marginTop:'30px'}}>
      

      <MDBCardBody className='p-5'> 
      <div>
              
          </div>
      </MDBCardBody>
    </MDBCard>

      </div>
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
    </div>
  );
};

export default AnnualReport;
