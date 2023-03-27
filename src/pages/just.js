import * as React from "react";
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
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function GutterlessList() {
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
  //  const arraysi=[{name:"alan",rollno:"1"},{name:"alan",rollno:"1"}];

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {busColl.map((value) => (
        <ListItem
          key={value.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={value.data.busName} />
        </ListItem>
      ))}
    </List>
  );
}
