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

export default function Ticket(props) {
  const { currentUser } = useAuthValue();
  const [test, settest] = useState();
  const [bookings, setbookings] = useState([]);

  const [busColl, setbusColl] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users", currentUser?.email, "bookings"));
    onSnapshot(q, (querySnapshot) => {
      setbusColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
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
  return (
    <>
      <div>
        <div>
          <div className="parent">
            <div className="cont">
              <div className="title">
                Your Bookings
                {busColl.map((bus) => (
                  <BookedList key={bus.id} busName={bus.data.busName} />
                ))}
              </div>
            </div>
            <div className="titleScreen">
              <div className="busdetails">Bus Details</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
