import React from "react";
import { useState, useEffect } from "react";
import { useAuthValue } from "../Sign-up/AuthContext";
import TicketComponent from "../../Components/ticket/ticket";
import "./index.css";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,

  updateDoc,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import BookedList from "./bookedList/bookedList";
import { TransportMap } from "../../Components/TransportMap";
import { MapContainer, TileLayer } from "react-leaflet";
import BusMap from "../../Components/Busmap/busMap";
import Tracker from "../../simulation/tem";
import { Button } from "@mui/material";
export default function Ticket(props) {
  const { currentUser } = useAuthValue();
  const [test, settest] = useState();
  const [bookings, setbookings] = useState([]);

  // const [busColl, setbusColl] = useState([]);
  // // console.log(currentBus)

  // useEffect(() => {
  //   const q = query(collection(db, "users", currentUser?.email, "bookings"));
  //   onSnapshot(q, (querySnapshot) => {
  //     setbusColl(
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);

  // const bookedBus = localStorage.getItem("bookedbus");
  // console.log(bookedBus);
  // const BusTracker = async () => {
  //   const unsub = onSnapshot(
  //     doc(db, "buses", , "location", "Aradhana"),
  //     (doc) => {
  //       setaradhana(doc.data().location);
  //       // console.log("Current data: ", doc.data().location);
  //     }
  //   );
  //   // console.log("data is"+test.location)
  // };
  // console.log(busColl);
  // function getStepContent(step) {
  //   switch (step) {
  //     case 0:
  //       // return <Ticket/>;
  //     case 1:
  //       // return <Contact/>;
  //     // case 2:
  //     //   return <PayCard />;
  //     // case 3:
  //     //   return <Success />;
  //     default:
  //       return "Unknown step";

  // function getStepContent(step) {
  //   switch (step) {
  //     case 0:
  //       return <Ticket/>;
  //     case 1:
  //       return <Contact/>;
  //     // case 2:
  //     //   return <PayCard />;
  //     // case 3:
  //     //   return <Success />;
  //     default:
  //       return "Unknown step";
  //   }

  const [page, setpage] = useState(0);
  const [currentBus, setcurrentBus] = useState("");
  // console.log("From basePage"+currentBus)
  // const [Bus, setBus] = useState([11.027775, 76.099903]);


  // useEffect(() => {
  //   console.log(currentBus + "hhhhhh");
  // }, [currentBus]);

  // const docRef = doc(db, "buses", currentBus, "location", currentBus);

  // const unsub = onSnapshot(docRef, (doc) => {
  //   setBus(doc.data().location);
  //   console.log(
  //     "current bus" + currentBus + "Current data: ",
  //     doc.data().location
  //   );
  // });
  // unsub();


  // const unsubscribe = unsub();

  return (
    <>
      <div>
        <div>
          <div className="parent">
            <div className="cont">
              <div className="title">
                <div className="head">Your Bookings

                </div>

                {/* {busColl.map((bus) => (
                  <BookedList
                    key={bus.id}
                    busName={bus.data.busName}
                    onclick={() => setcurrentBus(bus.data.busName)}
                  />
                ))} */}
              </div>
            </div>
            <div className="titleScreen">
              <div className="busdetails">Bus Details</div>
              <div className="mapcontainer">
                {/* <BusMap busName={currentBus}  /> */}
              </div>
              <div>
                {/* <Button
                  variant="outlined"
                  onClick={() => {
                    // unsub();
                  }}
                >
                  {" "}
                  Stop
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
