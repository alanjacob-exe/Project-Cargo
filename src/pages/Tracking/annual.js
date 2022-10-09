import React from "react";
import DestinationComplete from "../../Components/Autocomplete/DestinationAutocomplete";
import SourceComplete from "../../Components/Autocomplete/SourceAutocomplete";
import Footer from "../../Components/Footer";
import "./annual.css";
import GeoLocation from "../../Components/Location/CurrentLocation";
//import { FaBusAlt } from "react-icons/fa";
import Map from "../../Components/GoogleMap/GoogleMap";

//import { useState } from "react";

const AnnualReport = () => {
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
    <div className="main ">
      <div>
        <div className="text border">Find Your Bus...</div>

        <div className="border margin table">
          <div className="border table ">
            <div className="border source1">Enter Your Source:</div>
            <div className="border source">
              <SourceComplete />
            </div>
          </div>
          <div className="border table">
            <div className="border source1 ">Enter Your Destination:</div>
            <div className="border source">
              <DestinationComplete />
            </div>
          </div>
        </div>

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
    <Map />

    </div>
  );
};

export default AnnualReport;
