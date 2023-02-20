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
import { useHistory } from "react-router-dom";

import { useState } from "react";
import { TransportMap } from "../../Components/TransportMap";
import Places3 from "../../Components/BingPlacesApi/Places3";
import Places4 from "../../Components/BingPlacesApi/places4";
import Ui from "../../Components/detailsTab";
import { useAuthValue } from "../Sign-up/AuthContext";
import Tracker from "../../simulation/tem";
import { useNavigate, useLocation } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import Buslist from "../../Components/busList/index";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Modal from "../../Components/Modal/index";
import SourceComplete from "../../Components/Autocomplete/SourceAutocomplete";

const baseURL1 = "https://dev.virtualearth.net/REST/v1/Locations?q=";
const baseURL2 = "&key=";

const key = process.env.REACT_APP_BING_KEY;
const pointurl1 = "https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=";
const pointurl2 = "&wp.1=";
const pointurl3 = "&optmz=distance&routeAttributes=routePath&output=json&key=";

const AnnualReport = () => {
  const position = [10.95590759312288, 76.22946062699094];
  const position2 = [11.0568857, 76.0956861];
  let pageLocation = useLocation();

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

  const [data, setData] = useState(null);
  const [duration, setduration] = useState("00");
  const [eta, seteta] = useState("");
  const [traffic, settraffic] = useState("");
  const [distance, setDistance] = useState("");
  const [isShown, setIsShown] = useState(false); //for source,destination markers
  const { currentUser } = useAuthValue(); //for current user details
  const { isLoggedin } = useAuthValue();
  const navigate = useNavigate();
  const prevLocation = useLocation();
  const [appointments, setAppointments] = useState("");

  // console.log("source and dest"+source,destination)
  // console.log("useelocation====" + prevLocation.pathname);

  // useEffect(() => {

  //   const fetchPost = async () => {
  //       await getDocs(collection(db, "buses")).then((querySnapshot) => {
  //         const newData = querySnapshot.docs.map((doc) => ({
  //           info: doc.data(),
  //           id: doc.id,
  //         }));
  //         setbuses(setInfo);
  //         console.log(buses, setInfo);
  //       });
  //     };

  // }, [])

  ///////////////////////////////////////Changing Style After Click   ///////////////////////

  const [style, setStyle] = useState("dashboard");
  const [infostyle, setInfoStyle] = useState("infotab");
  const [shrink, setshrink] = useState("container")

  const changeDashboard = () => {

    setStyle("dashboardAfter");
  };

  const changeDetailsTab = () => {
    setshrink("containerAfter")
    setInfoStyle("infotabAfter");
  };

  // console.log("current user=" + currentUser?.email);
  // console.log(isLoggedin);

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

  ///////////////////////////////////////// to redirect if theuser is not logged in///////////////////
  useEffect(() => {
    // Checking if user is not loggedIn
    if (!localStorage.getItem("user")) {
      navigate("/signin");
    } else {
      navigate("/track");
    }
  }, []);

  // console.log("logged in?" + isLoggedin);
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
    // console.log(
    //   `${pointurl1}${location1}${pointurl2}${location2}${pointurl3}${key}`
    // );
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
        console.error(e.message);
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
    // console.log(`${baseURL1}${location}${baseURL2}${key}`);

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  const destData = async (location) => {
    const response = await fetch(`${baseURL1}${location}${baseURL2}${key}`);
    // console.log(`${baseURL1}${location}${baseURL2}${key}`);

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

  ///////////////////////////////    collecting data from database  ////////////////////

  const [buses, setbuses] = useState([]);
  const [info, setInfo] = useState([]);

  const [click, setclick] = useState(false);

  // const fetchPost = async () => {
  //   await getDocs(collection(db, "buses")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       info: doc.data(),
  //       id: doc.id,
  //     }));
  //     setbuses(setInfo);
  //     // console.log(buses, setInfo);
  //   });
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, [click]);

  function isClicked() {
    if (click === false) {
      console.log("this is   true");
      setclick(true);
    }
  }

  // const [busdetails, setbusdetails] = useState("");
  // useEffect(() => {
  //   const currentUser = JSON.parse(localStorage.getItem("user"));
  //   const fetchPost = async () => {
  //     await getDocs(collection(db, "buses")).then((querySnapshot) => {
  //       const newData = querySnapshot.docs.map((doc) => ({
  //         info: doc.data(),
  //         id: doc.id,
  //       }));
  //       setbuses(setInfo);
  //       console.log(buses, setInfo);
  //     });
  //   };
  // }, []);

  // console.log("userdetails"+currentUser.displayName)
  // console.log("busname====" + setbuses[0].data.busName);

  // console.log("isloggedin"+isLoggedin)

  /////////////////////////////batabse communication////////////
  const [busColl, setbusColl] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "buses"));
    onSnapshot(q, (querySnapshot) => {
      setbusColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const [availableBuses, setavailableBuses] = useState([]);
  const [sortedList, setsortedList] = useState([]);
  let arrays = [];

  const sortedBusList = (start,destination) => {
    console.log("start location" + start,destination);
    setsortedList( busColl.filter((buses) => buses.data.startCity == start && buses.data.destinationCity==destination
    ));
  };

  useEffect(() => {
    sortedBusList(source.label,destination.label);
  }, [source,destination]);

  console.log("full buses" + busColl.length);

  console.log("sorted11" + sortedList.length);

  var a = [];
  

  

  ////////////////////////////////////////////     Modal Working  ////////////////////////////////////

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
            <div className={style}>
              <div className="dashbody">
                <label className="montserrat" style={{ color: "#fff" }}>
                  Enter Your Location:
                </label>

                <SourceComplete
                  options={options}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(event, value) => setsource(value)}
                />
                <Button variant="contained" onClick={handleClick}>
                  Show Stops
                </Button>
              </div>

              <div className="dashbody">
                <label className="montserrat" style={{ color: "#fff" }}>
                  Enter Your Destination:
                </label>
                <DestinationComplete
                  options={options}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(event, value) => setdestination(value)}
                />
              </div>
              <div>
                <Button
                  className="button"
                  variant="contained"
                  onClick={() => {
                    changeDashboard();
                    changeDetailsTab();
                    setmapSource(source.id);
                    setmapDestionation(destination.id);
                    isClicked()
                  }}
                >
                  Find!
                </Button>
              </div>
              <div className="busmap">
                {click && sortedList.map((bus) => (
                  <Buslist key={bus.id} Name={bus.data.busName} onClick={()=>{
                    navigate("/unknown")
                  }} />
                ))}
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
                  isShown={isShown} //for displaying busstop on map
                />
              </div>
            </div>
            <div className={infostyle}>
              <Ui
                source={source.label}
                destination={destination.label}
                duration={duration}
                eta={eta}
                traffic={traffic}
                distance={distance}
                shrink={shrink}
              ></Ui>
            </div>
            <div></div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AnnualReport;
