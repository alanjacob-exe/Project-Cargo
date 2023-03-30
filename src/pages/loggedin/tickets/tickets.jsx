import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
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
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useAuthValue } from "../../Sign-up/AuthContext";
import { TransportMap } from "../../../Components/TransportMap";
import BusMap from "../../../Components/Busmap/busMap";

export default function Tickets(props) {
  const { currentUser } = useAuthValue();

  const [busColl, setbusColl] = useState([
    { id: "bus", data: { busName: "test" } },
  ]);

  const [busId, setbusId] = useState(null);

  ///////////////////to load the user email before calling the code ////////
  const userEmail = localStorage.getItem("userEmail");
  // console.log(d + "useremail");

  const bookedData = () => {
    const e = userEmail;
    const q = query(collection(db, "users", userEmail, "bookings"));
    onSnapshot(q, (querySnapshot) => {
      setbusColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  useEffect(() => {
    bookedData();
  }, [userEmail]);

  const [Bus, setBus] = useState([11.027775, 76.099903]);
  const busIDstore = [];
  const bustracker = () => {
    console.log("bus tracker" + busId);
    // const docRef2 = doc(db, "buses", "KL108923", "location", "KL108923");
    // docRef2.off()

    busIDstore.push(busId);
    if (busId != null) {
      const docRef = doc(db, "buses", busId, "location", busId);
      console.log(docRef);
      const unsub = onSnapshot(docRef, (doc) => {
        setBus(doc.data().location);
        console.log(
          "current bus" + busId + "Current data: ",
          doc.data().location
        );
      });
      return () => unsub();
    }
  };
  console.log(busIDstore);

  useEffect(() => {
    bustracker();
  }, [busId]);

  // const cancelSubs=()=>{
  // docRef.off()  }
  // console.log(Bus+"from Tickets")

  const [sortedBooking, setsortedBooking] = useState();
  console.log(sortedBooking)

  return (
    <div className="w-full h-full absolute border rounded-xl">
      <div className="w-[25%] h-full  rounded-xl border absolute bg-white">
        <div className=" h-[10%] border flex rounded-xl w-full  text-black mx-auto ">
          <div className="font-semibold   text-xl m-auto"> Your Bookings</div>
        </div>
        <div className="block h-[50%]">
          <div className="font-semibold mt-3 ml-3
          ">Select a Date: </div>
          <List className="w-[90%] mx-auto">
            {busColl?.map((value) => (
              <IconButton
                key={value.id}
                size="medium"
                color="primary"
                sx={{ backgroundColor: "#F5F5F5" }}
                className="bg-sky-300"
                onClick={() => {
                  setsortedBooking(
                    busColl.filter(
                      (bus) => {
                        if(bus.data.bookingDate === value.data.bookingDate)
                        {
                          return bus
                        }
                      }
                    )
                  );
                }}
              >
                <div className="text-lg font-sans">
                  {value.data.bookingDate}
                </div>
              </IconButton>
            ))}
            {sortedBooking?.map((value) => (
              <ListItem
                key={value.id}
                disableGutters
                secondaryAction={
                  <IconButton
                    className="hover:bg-black hover:text-black"
                    aria-label="comment"
                    onClick={() => {
                      setbusId(value.data.busId);
                    }}
                  >
                    <IoArrowForwardOutline />{" "}
                  </IconButton>
                }
              >
                <ListItemText primary={value.data.busName} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className="bg-white w-[75%]  right-0 ml-auto h-full flex absolute">
        <BusMap Bus={Bus} />
      </div>
    </div>
  );
}
