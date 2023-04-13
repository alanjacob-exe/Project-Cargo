import React from "react";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DestinationComplete from "../../Components/Autocomplete/DestinationAutocomplete";
import "./annual.css";
import Navbar from "../../Components/Navbar";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { TransportMap } from "../../Components/TransportMap";
import Ui from "../../Components/detailsTab";
import { useAuthValue } from "../Sign-up/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Buslist from "../../Components/busList/index";
import SourceComplete from "../../Components/Autocomplete/SourceAutocomplete";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

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
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(dayjs(new Date()));


  useEffect(() => {
    localStorage.setItem("bdate", date.$D);
    localStorage.setItem("bmonth", date.$M + 1);
    localStorage.setItem("byear", date.$y);

  
  }, [date]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  ///////////////////////////////////////Changing Style After Click   ///////////////////////

  const [style, setStyle] = useState("dashboard");
  const [infostyle, setInfoStyle] = useState("infotab");
  const [shrink, setshrink] = useState("container");

  const changeDashboard = () => {
    setStyle("dashboardAfter");
  };

  const changeDetailsTab = () => {
    setshrink("containerAfter");
    setInfoStyle("infotabAfter");
  };

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

  const options = [
    { label: "Perinthalmanna", id: "10.976088, 76.225511" },
    { label: "Manjeri", id: "11.1192317,76.1207973" },
    { label: "Kottakkal", id: "11.000956, 76.004727" },
    { label: "Malappuram", id: "11.041769, 76.080161" },
    // { label: "Wandoor", id: "11.195534, 76.235986" },
    { label: "Tirur", id: "10.916534, 75.924474" },
    // { label: "Ponnani", id: "10.766792, 75.925828" },
    // { label: "Vengara", id: "11.050791, 75.977101" },
    // { label: "Parappanangadi", id: "11.048634, 75.860053" },
    // { label: "Cherpulaserri", id: "10.878561, 76.312567" },
    // { label: "Nilambur", id: "11.276472, 76.225191" },
    // { label: "Kottayam", id: "9.591403, 76.522148" },
    // { label: "Areekode", id: "11.235016, 76.051832" },
  ];


  ////////////////////////////    Enable The Console log  in the function below to access the url 

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
  const [bbox, setbbox] = useState([
    [10.974977],
    [76.080194],
    [11.041843, [76.225484]],
  ]);
  // const [bboxValues, setbboxValues] = useState([
  //   [50.505, -29.09],
  //   [52.505, 29.09],
  // ])
  // console.log("sourcecoordinate" + sourceCoordinate);
  // console.log("sourcecoordinate" + destinationcoordinate);

  useEffect(() => {
    points(sourceCoordinate, destinationcoordinate)
      .then((data) => {
        if (data.resourceSets && data.resourceSets.length > 0) {
          Setpointers(
            data.resourceSets[0].resources[0].routePath.line.coordinates
          );
          setbbox(data.resourceSets[0].resources[0].bbox);
          return bbox;
          return pointers;
        }
      })
      .catch((e) => {
        // console.error(e.message);
      });
  }, [sourceCoordinate, destinationcoordinate]);


  useEffect(() => {
    points(sourceCoordinate, destinationcoordinate)
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
        // console.error(e.message);
      });
  }, [sourceCoordinate, destinationcoordinate]);

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

  function isClicked() {
    if (click === false) {
      // console.log("this is   true");
      setclick(true);
    }
  }

  /////////////////////////////databse communication////////////
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

  const [sortedList, setsortedList] = useState([]);

  const sortedBusList = (start, destination) => {
    // console.log("start location" + start, destination);
    setsortedList(
      busColl.filter(
        (buses) =>
          buses.data.startCity == start &&
          buses.data.destinationCity == destination
      )
    );
  };

  useEffect(() => {
    sortedBusList(source.label, destination.label);
  }, [source, destination]);

  ///////////////////////////////////////handleclick//////////////

  const handleDualButtonClickOne = () => {
    changeDashboard();
    changeDetailsTab();
    isClicked();
  };

  const handleDualButtonClickTwo = () => {
    navigate("/seatselection");
  };

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
          <MDBCardBody className="cardcontainer">
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
                <div className="datepicker">
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Select Date"
                      inputFormat="DD/MM/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      value={date}
                      minDate={date}
                      // maxDate={"01-04-2023"}

                      onChange={setDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>

                <div className="destinationpicker">
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
              </div>
              <div>
                <Button
                  className="button"
                  variant="contained"
                  onClick={() =>
                    // click
                    // handleDualButtonClickTwo()
                    handleDualButtonClickOne()
                  }
                >
                  {click ? "Track" : "Find!"}
                </Button>
              </div>
              <div className="busmap">
                {click &&
                  sortedList.map((bus) => (
                    <Buslist
                      key={bus.id}
                      Name={bus.data.busName}
                      data={bus}
                      eta={eta}
                    />
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
                  bbox={bbox}
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
