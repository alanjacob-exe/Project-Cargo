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

export default function Tickets(props) {
  const [busColl, setbusColl] = useState([
    { id: "bus", data: { busName: "test" } },
  ]);

  useEffect(() => {
    const q = query(
      collection(db, "users", "alan.abin9388@gmail.com", "bookings")
    );
    onSnapshot(q, (querySnapshot) => {
      setbusColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="w-full h-full absolute border rounded-xl">
      <div className="w-[25%] h-full  rounded-xl border bg-white">
        <div className=" h-[10%] border flex rounded-xl w-full  text-black mx-auto ">
          <div className="font-semibold   text-xl m-auto"> Your Bookings</div>
        </div>
        <div className="block h-[50%]">
          <List className="w-[90%] mx-auto">
            {busColl.map((value) => (
              <ListItem
                key={value.id}
                disableGutters
                secondaryAction={
                  <IconButton className="hover:bg-black hover:text-black" aria-label="comment">
                    <IoArrowForwardOutline />{" "}
                  </IconButton>
                }
              >
                <ListItemText  primary={value.data.busName} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
