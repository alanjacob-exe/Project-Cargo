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
import "./tickets.css"


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

  useEffect(() => {
    bustracker();
  }, [busId]);

  // const cancelSubs=()=>{
  // docRef.off()  }
  // console.log(Bus+"from Tickets")

  const [sortedBooking, setsortedBooking] = useState();

  let dates=[]
  for(let i=0;i<busColl.length;i++){
    dates.push(busColl[i].data.bookingDate)
    console.log("heyy"+busColl[i].data.bookingDate)
  }
console.log("dates are"+removeDuplicates(dates))

function removeDuplicates(arr) {
  return [...new Set(arr)];
}



function checkdate(item){
  return item.data.BookingDate="11"
}
let sortedDates=removeDuplicates(dates);
  return (
    <div className="main">
      <div className="parent-container">
        <div className="parent-subcontainer ">
          <div style={{fontWeight:"600",fontSize:"1.25rem",lineHeight:"1.75rem",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto",height:"10%",height:"50%"}}>Your Bookings </div>
        </div>
        <div style={{display:"block",height:"50%"}} >
          <div style={{fontWeight:"600",marginTop:"0.75rem",marginLeft:"0.75rem",height:"10%"}} 
          >Select a Date: </div>
          <List style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}  >
            {sortedDates?.map((value) => (
              <IconButton
                key={value}
                size="medium"
                color="primary"
                sx={{ backgroundColor: "#F5F5F5" }}
                onClick={() => {
                  setsortedBooking(
                    busColl.filter(
                      (bus) => {
                        if(bus.data.bookingDate === value)
                        {
                          return bus
                        }
                      }
                    )
                  );
                }}
              >
                <div style={{fontSize:"1.25rem",lineHeight:"1.75rem",}} >
                  {value}
                </div>
              </IconButton>
            ))}
            {sortedBooking?.map((value) => (
              <ListItem
                key={value.id}
                sx={{height:"50%"}}
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
      <div className="mapcontainer">
        <BusMap Bus={Bus} />
      </div>
    </div>
  );
  console.log(sortedBooking);

}
