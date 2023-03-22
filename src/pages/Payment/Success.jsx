import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import succlogo from "../../Photos/animat-checkmark.gif";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthValue } from "../Sign-up/AuthContext";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
  img: { width: "200px" },
  con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Success() {


  const navigate = useNavigate();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { currentUser } = useAuthValue();

  var currentdate = new Date();
  var currentdatetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const repopulateValues = async () => {
    const name = localStorage.getItem("bookingName");
    const gender = localStorage.getItem("bookingGender");
    const seatNumber = localStorage.getItem("bookingSeat");
    const address = localStorage.getItem("address");
    const busid = localStorage.getItem("busid");
    console.log(name);
    console.log(gender);
    console.log(seatNumber);
    try {
      const busRef = doc(
        db,
        "buses",
        busid,
        "bookings",
        currentUser.email
      );
      await setDoc(busRef, {
        fullName: name,
        Gender: gender,
        Seatnumber: seatNumber,
        createdAt: Timestamp.fromDate(new Date()),
      });
      await setDoc(
        doc(db, "users", currentUser.email, "bookings", busid),
        {
          fullName: name,
          Gender: gender,
          Seatnumber: seatNumber,
          busId: busid,
          createdAt: Timestamp.fromDate(new Date()),
        }
      );
      // await addDoc(doc(db, "buses", "Merelal", "reservedSeats",), {
      //   bookedSeats: seatNumber,
      // });

      alert("Booked!");
    } catch (err) {
      alert(err);

      console.error(err);
    }
  };
  const updateFirebase = async () => {};

  useEffect(() => {
    repopulateValues();
    updateFirebase();
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.con}>
          <img src={succlogo} alt="loading..." className={classes.img} />
        </div>
        <Typography
          className={classes.title}
          variant="h2"
          color="success"
          gutterBottom
        >
          <b> Order Confirmed </b>
        </Typography>
      </CardContent>
    </Card>
  );
}
