import React from "react";
import Navbar from "../../Components/Navbar";
import "./event.css";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import PlacesApi from "../../Components/BingPlacesApi/PlacesApi";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Places3 from "../../Components/BingPlacesApi/Places3";
import Places4 from "../../Components/BingPlacesApi/places4";
import axios from "axios";
import { json } from "react-router-dom";
import { useEffect } from "react";
import Country from "../Test";

const Events = () => {
  var async = require("async");
  const baseURL =
    "https://dev.virtualearth.net/REST/v1/Locations?q=aluva&key=AkZCq_Islhah9akzIeF4n7sG0nOiw3MRjNYDx3FK9-mI16gbmjGvBe3RP8QYD4N2";
  const baseURL1 = "https://dev.virtualearth.net/REST/v1/Locations?q=";
  const baseURL2 = "&key=";

  const key = process.env.REACT_APP_BING_KEY;
  const [countryItems, initCountry] = useState([]);
  const [coordinates, setcoordinates] = useState("");
  const [destination, setdestination] = useState("");



  const [location, setlocation] = useState("");
  console.log("location= "+destination.label)
  const fetchData = async (location) => {
    const response = await fetch(`${baseURL1}${location}${baseURL2}${key}`);
    console.log(`${baseURL1}${location}${baseURL2}${key}`);

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData(destination.label)
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
          console.log(latitude, longitude);
          setcoordinates([latitude, longitude]);
          console.log("coordinates are" + [latitude, longitude]);
          return coordinates;
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [destination.label]);
  // console.log(location);
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

  return (
    <div className="width height color">
      <div>
        <Navbar />

        <div>
          <div style={{ position: "relative" }}>
            <div className="border rightbox" style={{ marginTop: "6%" }}>
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
              
              <Button
                className="button"
                variant="contained"
                onClick={() => fetchData(destination.label)}
              >
                clickme
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
