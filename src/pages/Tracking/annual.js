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
import Places from "../../Components/BingPlacesApi/PlacesApi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import Places2 from "../../Components/BingPlacesApi/PlacesApi2";

import { useState } from "react";
import { TransportMap } from "../../Components/TransportMap";
import Places3 from "../../Components/BingPlacesApi/Places3";
import Places4 from "../../Components/BingPlacesApi/places4";
import Ui from "../../Components/detailsTab";
import {useAuthValue} from '../Sign-up/AuthContext'
import Tracker from "../tem";


const baseURL1 = "https://dev.virtualearth.net/REST/v1/Locations?q=";
const baseURL2 = "&key=";

const key = process.env.REACT_APP_BING_KEY;
const pointurl1 = "https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=";
const pointurl2 = "&wp.1=";
const pointurl3 = "&optmz=distance&routeAttributes=routePath&output=json&key=";

const AnnualReport = () => {
  const position = [10.95590759312288, 76.22946062699094];
  const position2 = [11.0568857, 76.0956861];

  const [pointers, Setpointers] = useState("");
  // console.log("pointers:  "+pointers[0])

  const [source, setsource] = useState("perinthalmanna"); //for Source Autocomplete
  const [destination, setdestination] = useState("kottayam");
  const [coordinates, setcoordinates] = useState("");
  const [sourceCoordinate, setsourceCoordinate] = useState([
    10.95590759312288, 76.22946062699094,
  ]);
  const [destinationcoordinate, setdestinationCoordinate] = useState([
    10.95590759312288, 76.22946062699094,
  ]);
  const [mapSource, setmapSource] = useState([
    10.95590759312288, 76.22946062699094,
  ]);
  const [mapDestination, setmapDestionation] = useState([
    10.95590759312288, 76.22946062699094,
  ]);
  // console.log("source coordinate:" + sourceCoordinate);
  // console.log("destination coordinate:" + destinationcoordinate);       //to check if dynamic marker is working or not

  // console.log(source.label);
  // console.log(destination.label);

  const [data, setData] = useState("");
  const [duration, setduration] = useState("00");
  const [eta, seteta] = useState("");
  const [traffic, settraffic] = useState("");
  const [distance, setDistance] = useState("");
  const [isShown, setIsShown] = useState(false);  //for source,destination markers
  const {currentUser} = useAuthValue()  //for current user details

  console.log(currentUser?.email)


  // const query=data;
  // const [duration,setduration]=useState("");
  // const [eta, seteta] = useState("")
  // const [traffic, settraffic] = useState('')
  // settraffic(query.resourceSets[0].resources[0].trafficCongestion)
  // setduration(query.resourceSets[0].resources[0].travelDuration)
  // seteta(query.resourceSets[0].resources[0].travelDurationTraffic)
  // console.log("data is" + data.resourceSets[0].resources[0].travelDuration);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const options = [
    { label: "Perinthalmanna", id: "10.976088, 76.225511" },
    { label: "Manjeri", id: "11.1192317,76.1207973" },
    { label: "Kottakkal", id: "11.000956, 76.004727" },
    { label: "Malappuram", id: "11.041769, 76.080161" },
    { label: "Wandoor", id: "11.195534, 76.235986" },
    { label: "Tirur", id: "10.916534, 75.924474" },
    { label: "Ponnani", id: "10.766792, 75.925828" },
    { label: "Vengara", id: "11.050791, 75.977101" },
    { label: "Parappanangadi", id: "11.048634, 75.860053" },
    { label: "Cherpulaserri", id: "10.878561, 76.312567" },
    { label: "Nilambur", id: "11.276472, 76.225191" },
    { label: "Kottayam", id: "9.591403, 76.522148" },
    { label: "Areekode", id: "11.235016, 76.051832" },
  ];


  ///////////////////////////////////////       for finding Polyline ////////////////////////////////


  const points = async (location1, location2) => {
    // console.log(`${pointurl1}${location1}${pointurl2}${location2}${pointurl3}${key}`)
    const response = await fetch(
      `${pointurl1}${location1}${pointurl2}${location2}${pointurl3}${key}`
    );

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };



  ///////////////////////////////////////       for finding Polyline ////////////////////////////////

  useEffect(() => {
    points(mapSource, mapDestination)
      .then((data) => {
        if (data.resourceSets && data.resourceSets.length > 0) {
          Setpointers(
            data.resourceSets[0].resources[0].routePath.line.coordinates
          );
          return pointers;
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [mapSource, mapDestination]);

  // console.log("points"+pointers)

  useEffect(() => {
    points(mapSource, mapDestination)
      .then((data) => {
        if (data.resourceSets && data.resourceSets.length > 0) {
          // console.log("traval time"+data.resourceSets[0].resources[0])
          setData(data);

          settraffic(data.resourceSets[0].resources[0].trafficCongestion);
          setduration(data.resourceSets[0].resources[0].travelDuration);
          seteta(data.resourceSets[0].resources[0].travelDurationTraffic);
          setDistance(data.resourceSets[0].resources[0].travelDistance);
          return pointers;
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [mapSource, mapDestination]);

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
    destData(destination.label)
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
        <MDBCard className="bg-glass width card1">
          <MDBCardBody className="  cardcontainer">
            <div className="dashboard ">
              <div className="dashbody">
                <label className="montserrat" style={{ color: "#fff" }}>
                  Enter Your Location:
                </label>
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
                <Button variant="contained" onClick={handleClick}>
                  Show Stops
                </Button>
              </div>

              <div className="dashbody">
                <label className="montserrat" style={{ color: "#fff" }}>
                  Enter Your Destination:
                </label>
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
                <Button
                  className="button"
                  variant="contained"
                  onClick={() => {
                    setmapSource(source.id);
                    setmapDestionation(destination.id);
                    // console.log("mapsource is:" + mapSource);
                    // console.log("map destination is:" + mapDestination);
                    // <TransportMap mapsource={source.id}/>
                  }}
                >
                  Find!
                </Button>
              </div>
            </div>
            <div className="view ">
              <div>
                {/* {location.loaded
              ? JSON.stringify(location)
              : "Location data not available"} */}
              </div>
              <div className="map">
                {/* <Tracker
                pointers={pointers}/> */}
                <TransportMap
                  location1={sourceCoordinate}
                  location2={destinationcoordinate}
                  pointers={pointers}
                  isShown={isShown}
                />
              </div>
            </div>
            <div className="bg-glass infotab">
              <Ui
                source={source.label}
                destination={destination.label}
                duration={duration}
                eta={eta}
                traffic={traffic}
                distance={distance}
              ></Ui>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AnnualReport;
