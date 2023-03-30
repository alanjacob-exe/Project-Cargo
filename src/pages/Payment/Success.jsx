import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import succlogo from "../../Photos/animat-checkmark.gif";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal } from "@mui/material";
import {
  Avatar,
  Button,
  ButtonBase,
  Divider,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

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
    margin: "10px",
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const emailform = useRef();

  const navigate = useNavigate();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { currentUser } = useAuthValue();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "25%",
    // border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };

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

  // const handleEmail = (e) => {
  //   emailjs
  //     .sendForm(
  //       "service_c6if2zk",
  //       "template_88dkltf",
  //       templateParams,
  //       "4qTu7peXWZ3e5BmWv"
  //     )
  //     .then(
  //       (result) => {
  //         alert("Message Sent Successfully");
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // const name = localStorage.getItem("bookingName");
  // const gender = localStorage.getItem("bookingGender");
  // const seatNumber = localStorage.getItem("bookedseat");
  // const address = localStorage.getItem("address");
  // const busid = localStorage.getItem("busid");
  // const bookingDate = localStorage.getItem("bdate");
  // const bookingMonth = localStorage.getItem("bmonth");
  // const bookingYear = localStorage.getItem("byear");
  // const busName = localStorage.getItem("busname");

  // const to_Email = localStorage.getItem("userEmail");

  // const templateParams = {
  //   to: to_Email,
  //   seats: seatNumber,
  //   busName: busName,
  //   date: bookingDate,
  //   month: bookingMonth,
  //   year: bookingYear,
  //   busname: busName,
  // };

  const sendEmail = () => {
    const gender = localStorage.getItem("bookingGender");
    const address = localStorage.getItem("address");
    const busid = localStorage.getItem("busid");
    const bookingDate = localStorage.getItem("bdate");
    const bookingMonth = localStorage.getItem("bmonth");
    const bookingYear = localStorage.getItem("byear");
    const busName = localStorage.getItem("busname");
    const name = localStorage.getItem("bookingName");
    const seatNumber = localStorage.getItem("bookedseat");

    console.log(seatNumber + "hellooo");
    console.log(bookingDate);
    console.log(bookingMonth);
    console.log(bookingYear);
    const BookingDate = [[bookingDate], [bookingMonth], [bookingYear]];
    console.log(BookingDate);
  };

  const repopulateValues = async () => {
    const name = localStorage.getItem("bookingName");
    const gender = localStorage.getItem("bookingGender");
    const seatNumber = localStorage.getItem("bookedseat");
    const address = localStorage.getItem("address");
    const busid = localStorage.getItem("busid");
    const bookingDate = localStorage.getItem("bdate");
    const bookingMonth = localStorage.getItem("bmonth");
    const bookingYear = localStorage.getItem("byear");
    const busName = localStorage.getItem("busname");

    // console.log(seatNumber);
    // console.log(bookingDate);
    // console.log(bookingMonth);
    // console.log(bookingYear);
    // const BookingDate = [[bookingDate], [bookingMonth], [bookingYear]];
    // console.log(BookingDate);

    try {
      const busRef = doc(db, "buses", busid, "bookings", `${currentdate}`);
      await setDoc(busRef, {
        fullName: name,
        Gender: gender,
        Seatnumber: seatNumber,
        bookedOn: Timestamp.fromDate(new Date()),
        bookingDate,
        bookingMonth,
        bookingYear,
        userId: currentUser.email,
      });
      await setDoc(
        doc(db, "users", currentUser.email, "bookings", `${currentdate}`),
        {
          fullName: name,
          Gender: gender,
          Seatnumber: seatNumber,
          busId: busid,
          busName,
          bookedOn: Timestamp.fromDate(new Date()),
          bookingDate,
          bookingMonth,
          bookingYear,
        }
      );

      handleOpen();

      // sendEmail();
    } catch (err) {
      alert(err);

      console.error(err);
    }
  };

  useEffect(() => {
    // repopulateValues();
  }, []);

  const name = localStorage.getItem("bookingName");
  const seatNumber = localStorage.getItem("bookedseat");
  const bookingDate = localStorage.getItem("bdate");
  const bookingMonth = localStorage.getItem("bmonth");
  const bookingYear = localStorage.getItem("byear");
  const useremail = localStorage.getItem("userEmail");

  const [busname, setename] = useState(name);
  const [eseatnumber, seteseatnumber] = useState(seatNumber);
  const [ebookingDate, setebookingDate] = useState(bookingDate);
  const [ebookingMonth, setebookingMonth] = useState(bookingMonth);
  const [ebookingYear, setebookingYear] = useState(bookingYear);
  const [toemail, settoemail] = useState(useremail);

  // console.log("useref props" + emailform.current.toemail);

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <div className=" ">
          <form ref={emailform} onSubmit={sendEmail}>
            <input type="text" name="user_name" value={busname} />
            <input type="text" name="seatNumber" value={eseatnumber} />
            <input type="text" name="date" value={ebookingDate} />
            <input type="text" name="month" value={ebookingMonth} />
            <input type="text" name="year" value={ebookingYear} />
            <input type="text" name="toemail" value={toemail} />

            <input type="submit" value="Send" />
          </form>
        </div> */}
        <div className={classes.con}>
          <img src={succlogo} alt="loading..." className={classes.img} />
        </div>
        <Typography
          className={classes.title}
          variant="h2"
          color="success"
          gutterBottom
        >
          <b className="text-lg"> Order Confirmed </b>
        </Typography>
      </CardContent>
      <Modal
        sx={{ backgroundColor: "none" }}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        //   slots={{ backdrop: Backdrop }}
        //   slotProps={{
        //     backdrop: {
        //       TransitionComponent: Fade,
        //     },
        //   }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="font-semibold text-xl"
          >
            Booking confirmed
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Your ticket has been booked successfully
          </Typography>
          <div className="flex">
            <div className="flex mx-auto relative right-0 mt-2 ">
              <Button variant="contained" color="error" onClick={handleClose}>
                Continue
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </Card>
  );
}
