import React from "react";
import { useEffect } from "react";
import DestinationComplete from "../../Components/Autocomplete/DestinationAutocomplete";
import Footer from "../../Components/Footer";
import "./annual.css";
import GeoLocation from "../../Components/Location/CurrentLocation";
//import { FaBusAlt } from "react-icons/fa";
import Map from "../../Components/GoogleMap/GoogleMap";
import CurrentLocation from "../../Components/Location/CurrentLocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import Marker from "react-leaflet-animated-marker";

import Navbar from "../../Components/Navbar";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { margin } from "@mui/system";
import AutocompleteOption from "../../Components/Autocomplete/AutoCompleteOption";
import Places from "../../Components/BingPlacesApi/PlacesApi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import Places2 from "../../Components/BingPlacesApi/PlacesApi2";

import { useState } from "react";
import { TransportMap } from "../../Components/TransportMap";
import Places3 from "../../Components/BingPlacesApi/Places3";
import Places4 from "../../Components/BingPlacesApi/places4";



const baseURL1 = "https://dev.virtualearth.net/REST/v1/Locations?q=";
const baseURL2 = "&key=";

const key = process.env.REACT_APP_BING_KEY;



const AnnualReport = () => {
  const position = [10.95590759312288, 76.22946062699094];
  const position2 = [11.0568857, 76.0956861];

  const [source, setsource] = useState("perinthalmanna"); //for Source Autocomplete
  const [destination, setdestination] = useState("kottayam");
  const [coordinates, setcoordinates] = useState("");
  const [sourceCoordinate,setsourceCoordinate]=useState([10.95590759312288, 76.22946062699094])
  const [destinationcoordinate,setdestinationCoordinate]=useState([10.95590759312288, 76.22946062699094])
  console.log("source coordinate:"+sourceCoordinate)
  console.log("destination coordinate:"+destinationcoordinate)
  // console.log(coordinates)

  // console.log(coordinates);
  // console.log(source.label);
  // console.log(destination.label)
  const options = [
    { label: "Perinthalmanna", id: "1" },
    { label: "Manjeri", id: "3" },
    { label: "Kottakkal", id: "4" },
    { label: "Malappuram", id: "5" },
    { label: "Wandoor", id: "6" },
    { label: "Tirur", id: "7" },
    { label: "Ponnani", id: "8" },
    { label: "Vengar", id: "3" },
    { label: "Parappanangadi", id: "3" },
    { label: "Cherpulaserri", id: "3" },
    { label: "Nilambur", id: "3" },
    { label: "Kottayam", id: "3" },
    { label: "Areekode", id: "3" },
  ];

  const sourceData = async (location) => {
    const response = await fetch(`${baseURL1}${location}${baseURL2}${key}`);
    console.log(`${baseURL1}${location}${baseURL2}${key}`);

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  const destData = async (location) => {
    const response = await fetch(`${baseURL1}${location}${baseURL2}${key}`);
    console.log(`${baseURL1}${location}${baseURL2}${key}`);

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    sourceData(source.label)
      .then((data) => {
        if (
          data.resourceSets &&
          data.resourceSets.length > 0 &&
          data.resourceSets[0].resources &&
          data.resourceSets[0].resources.length > 0
        ) {
          var firstResult = data.resourceSets[0].resources[0];
          var latitude = firstResult.point.coordinates[0];
          var longitude = firstResult.point.coordinates[1];
          // console.log(latitude, longitude);
          setsourceCoordinate([latitude, longitude]);
          // console.log("source is " + [latitude, longitude]);
          return coordinates;
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [source.label]);


  useEffect(() => {
    sourceData(destination.label)
      .then((data) => {
        if (
          data.resourceSets &&
          data.resourceSets.length > 0 &&
          data.resourceSets[0].resources &&
          data.resourceSets[0].resources.length > 0
        ) {
          var firstResult = data.resourceSets[0].resources[0];
          var latitude = firstResult.point.coordinates[0];
          var longitude = firstResult.point.coordinates[1];
          // console.log(latitude, longitude);
          setdestinationCoordinate([latitude, longitude]);
          // console.log("destination is " + [latitude, longitude]);
          return coordinates;
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [destination.label]);

  

  
  return (
    <div className="height firstwidth color top ">
      <Navbar />
      <div
        id="radius-shape-1"
        className="position-absolute rounded-circle shadow-5-strong"
      ></div>
      <div
        id="radius-shape-2"
        className="position-absolute shadow-5-strong"
      ></div>

      <div>
        <MDBCard className="bg-glass width">
          <MDBCardBody className="glass border cardcontainer">
            <div className="dashboard border">
              <div className="dashbody">
                <label>Enter Your Location:</label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  sx={{}}
                  options={options}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(event, value) => setsource(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Source"
                      style={{ backgroundColor: "#fff", borderRadius: "12px" }}
                    />
                  )}
                />
              </div>

              <div className="dashbody">
                <label>Enter Your Destination:</label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(event, value) => setdestination(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Destination"
                      style={{ backgroundColor: "#fff", borderRadius: "12px" }}
                    />
                  )}
                />
              </div>
              <div>
                {/* <Button
                  className="button"
                  variant="contained"
                  onClick={() => {
                    var place = Places4(source.label);

                    console.log("place=" + place);
                  }}
                >
                  clickme
                </Button> */}
              </div>
            </div>
            <div className="view border">
              <div>
                {/* {location.loaded
              ? JSON.stringify(location)
              : "Location data not available"} */}
              </div>
              <div className="map">
                <TransportMap location1={sourceCoordinate} location2={destinationcoordinate}/>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AnnualReport;
