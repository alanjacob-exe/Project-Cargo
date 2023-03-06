import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import AirplaneMarker from "./AirplaneMarker";
import data from "./file.json";
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

  const [test, settest] = useState([11.027775, 76.099903]);
  const liveListner = async () => {
    const unsub = onSnapshot(
      doc(db, "buses", "Merelal", "location", "Merelal"),
      (doc) => {
        settest(doc.data().location);
        console.log("Current data: ", doc.data().location);
      }
    );
    console.log("data is"+test.location)
  };
  useEffect(() => {
    liveListner();
    AradhanaTracker();
    JazzaTrack();
  }, []);

  //////////////////////////  Manjeri - Perinthalmanna  //////////////
  const [aradhana, setaradhana] = useState([11.027775, 76.099903]);

  const AradhanaTracker = async () => {
    const unsub = onSnapshot(
      doc(db, "buses", "Aradhana", "location", "Aradhana"),
      (doc) => {
        setaradhana(doc.data().location);
        // console.log("Current data: ", doc.data().location);
      }
    );
    // console.log("data is"+test.location)
  };

  const [Jazza, setJazza] = useState([11.027775, 76.099903])

  const JazzaTrack = async () => {
    const unsub = onSnapshot(
      doc(db, "buses", "Jazza", "location", "Jazza"),
      (doc) => {
        setJazza(doc.data().location);
      }
    );
  };

 
  return (
      
      <MapContainer
        style={{ height: "calc(100vh - 52px)" }}
        center={[10.975958, 76.225454]}
        zoom={11}
        minZoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
          url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
        />
        {/* <AirplaneMarker data={currentTrack ?? {}} />
        <AirplaneMarker data={manjeriTrack ?? {}} display="Manjeri" />
        <AirplaneMarker data={KottakkalTrack ?? {}} display="kottakkal" /> */}
        <AirplaneMarker data={test ?? {}} display="database" />
        <AirplaneMarker data={aradhana ?? {}} display="Aradhana"/>
        <AirplaneMarker data={Jazza ?? {}} display="Jazza"/>
        <Marker position={[latitude, longitude]} />
      </MapContainer>
  );
}
