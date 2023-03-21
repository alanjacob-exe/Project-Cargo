import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./busmap.css";

import BusPositionTracker from "./BusTracker";
import AirplaneMarker from "../../simulation/tem/AirplaneMarker";
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
import { useState, useEffect } from "react";

export default function BusMap(props) {
  const busname = props.busName;
  console.log("from busmap" + busname);
  console.log("from busmap bus"+Bus)
  const [Bus, setBus] = useState([11.027775, 76.099903]);


  const [detach, setdetach] = useState(0);
  // const selectedBus = localStorage.getItem("busid");

  const busTracker = async (busname) => {
    console.log("bus tracker" + busname);

    // if (detach===1){
    //   unsub.off();
    // }
    const docRef = doc(db, "buses", busname, "location", busname);

    const unsub = onSnapshot(docRef, (doc) => {
      setBus(doc.data().location);
      console.log(
        "current bus" + busname + "Current data: ",
        doc.data().locacation
      );
    });
    console.log("data is" + test.location);
  };

  // const unsubscribe = onSnapshot(
  //   doc(db, "buses", "Jazza", "location", "Jazza"),
  //   (doc) => {
  //     setBus(doc.data().location);
  //     console.log(
  //       "current bus" + busname + "Current data: ",
  //       doc.data().location
  //     );
  //   }
  // );

  // const unsub = onSnapshot(
  //   doc(db, "buses", busname, "location", busname),
  //   (doc) => {
  //     setBus(doc.data().location);
  //     console.log(
  //       "current bus" + busname + "Current data: ",
  //       doc.data().location
  //     );
  //     }
  //     );

  // const unsubscribe=onSnapshot(doc(db, "buses", busname, "location", busname),(  )=>{

  // });
  useEffect(() => {
    busTracker(busname)
  }, [busname])



  return (
    <MapContainer
      center={[10.975958, 76.225454]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
      ></TileLayer>
      <AirplaneMarker data={Bus ?? {}} display="dummy" />
    </MapContainer>
  );
}
