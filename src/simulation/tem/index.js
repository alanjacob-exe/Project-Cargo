import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import AirplaneMarker from "./AirplaneMarker";
import data from "./file.json";
import pmnaManj from "./pmna-Manj.json";
import pmnaKKl from "./pmnaKottakkal.json";
import { Button } from "bootstrap";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import "./styles.css";

let cursor = 0;
let cursor1 = 0;
let kottakkalcursor = 0;

export default function Tracker(props) {
  var dataStory = data.resourceSets[0].resources[0].routePath.line.coordinates;
  var manjeriRoute =
    pmnaManj.resourceSets[0].resources[0].routePath.line.coordinates;
  var pmnaKottakkalRoute =
    pmnaKKl.resourceSets[0].resources[0].routePath.line.coordinates;
  const [latitude, setLatitude] = useState(10.975958);
  const [longitude, setLongitude] = useState(76.225454);
  const [status, setStatus] = useState(null);

  const [currentTrack, setCurrentTrack] = useState({});
  const [manjeriTrack, setmanjeriTrack] = useState({});
  const [KottakkalTrack, setKottakkalTrack] = useState({});
  const pmnaManjeriTime = 54;

  ///////////////////////////////
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
  // console.log(busColl.data.startCity)

  const [test, settest] = useState([11.027775, 76.099903])
  const liveListner = async () => {
    const unsub = onSnapshot(
      doc(db, "buses", "Merelal", "location", "Merelal"),
      (doc) => {
        settest(doc.data().location);
        console.log("Current data: ", doc.data().location);
      }
    );
      // console.log("data is"+test.location)

  };
  useEffect(() => {
    liveListner();
  }, []);
  // console.log("data is"+test.location)

  useEffect(() => {
    setCurrentTrack(dataStory[cursor]);

    const interval = setInterval(() => {
      if (cursor === dataStory.length - 1) {
        cursor = 0;
        setCurrentTrack(dataStory[cursor]);
        return;
      }

      cursor += 1;
      setCurrentTrack(dataStory[cursor]);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  /////////////////   Perinthalmanna - Manjeri ///////////////
  // console.log(manjeriTrack)
  useEffect(() => {
    setmanjeriTrack(manjeriRoute[cursor1]);

    const interval = setInterval(() => {
      if (cursor1 === manjeriRoute.length - 1) {
        cursor1 = 0;
        setmanjeriTrack(manjeriRoute[cursor1]);
        return;
      }

      cursor1 += 1;
      setmanjeriTrack(manjeriRoute[cursor1]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  /////////////////////// perinthalmanna - Kottakkal /////////////////

  useEffect(() => {
    setKottakkalTrack(pmnaKottakkalRoute[kottakkalcursor]);

    const interval = setInterval(() => {
      if (kottakkalcursor === pmnaKottakkalRoute.length - 1) {
        kottakkalcursor = 0;
        setKottakkalTrack(pmnaKottakkalRoute[kottakkalcursor]);
        return;
      }

      kottakkalcursor += 1;
      setKottakkalTrack(pmnaKottakkalRoute[kottakkalcursor]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.watchPosition(
        function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);

          // navigator.geolocation.watchPosition(
          //   (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        //   },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  // console.log([lat, lng]);
  return (
    <div className="basic">
      <button onClick={getLocation}>Get Location</button>
      <h3>lattitude:{latitude}</h3>
      <h3>Longitude:{longitude}</h3>
      <MapContainer
        style={{ height: "calc(100vh - 52px)" }}
        center={[10.975958, 76.225454]}
        zoom={17}
        minZoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
          url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
        />
        {/* <AirplaneMarker data={currentTrack ?? {}} />
        <AirplaneMarker data={manjeriTrack ?? {}} display="Manjeri" />
        <AirplaneMarker data={KottakkalTrack ?? {}} display="kottakkal" /> */}
        <AirplaneMarker data={test ?? {} }display="database"/>
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}
