import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { Button, Modal, Box, Typography } from "@mui/material";
import {
  collection,
  doc,
  deleteDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useAuthValue } from "../../Sign-up/AuthContext";
import "./cancel.css";
import { Divider } from "@mui/material";



export default function Tickets(props) {
  const { currentUser } = useAuthValue();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [busColl, setbusColl] = useState([
    { id: "bus", data: { busName: "test" } },
  ]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "35%",
    // border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };

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
    // console.log("bus tracker" + busId);

    busIDstore.push(busId);
    if (busId != null) {
      const docRef = doc(db, "buses", busId, "location", busId);
      // console.log(docRef);
      const unsub = onSnapshot(docRef, (doc) => {
        setBus(doc.data().location);
        // console.log(
        //   "current bus" + busId + "Current data: ",
        //   doc.data().location
        // );
      });
      return () => unsub();
    }
  };

  useEffect(() => {
    bustracker();
    filterTicket();
    filterBus();
  }, [busId]);

  // const cancelSubs=()=>{
  // docRef.off()  }
  // console.log(Bus+"from Tickets")

  const [sortedBooking, setsortedBooking] = useState();
  const [ticket, setticket] = useState("");

  const filterTicket = () => {
    busColl.filter((value) => {
      if (value.data.busId === busId) setticket(value);
    });
  };

  const [currentBus, setcurrentBus] = useState("");
  const filterBus = () => {
    if (busId != null) {
      const docRef = doc(db, "buses", busId);
      const unsub = onSnapshot(docRef, (doc) => {
        setcurrentBus(doc.data());
        // console.log(doc.data());
      });
      return () => unsub();
    }
  };

  function findMonth(month) {
    switch (month) {
      case "1":
        return "JANUARY";
        break;
      case "2":
        return "FEBRUARY";
        break;
      case "3":
        return "MARCH";
        break;
      case "4":
        return "APRIL";
        break;
      case "5":
        return "MAY";
        break;
      case "6":
        return "JUNE";
        break;
      case "7":
        return "JULY";
        break;
      case "8":
        return "AUGUST";
        break;
      case "9":
        return "SEPTEMBER";
        break;
      case "10":
        return "OCTOBER";
        break;
      case "11":
        return "NOVEMBER";
        break;
      case "12":
        return "DECEMBER";
        break;
      default:
        return "Select a Ticket";
    }
  }
  var deleteTicket = async (e) => {
    // var deleteBus = String(removeBus[0].busName);
    // var docRef = doc(db, "buses", bud);
    // deleteDoc(docRef)
    //   .then(() => {
    //     console.log("Entire Document has been deleted successfully.");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const res = await deleteDoc(doc(db, "buses", removeBus)).then(() => {
    //   console.log("Document Deleted").catch((e) => {
    //     console.log();
    //   });
    // });
  };

  var deleteTicket = async (e) => {
    const ticketId = ticket.id;
    const busRef = doc(db, "buses", busId, "bookings", ticketId);
    const userRef = doc(db, "users", currentUser.email, "bookings", ticketId);
    try {
      await deleteDoc(busRef);
      await deleteDoc(userRef);
    } catch (err) {
      alert(err);
    }

    // var docRef = doc(db, "buses", bud);
    // deleteDoc(docRef)
    //   .then(() => {
    //     console.log("Entire Document has been deleted successfully.");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const res = await deleteDoc(doc(db, "buses", removeBus)).then(() => {
    //   console.log("Document Deleted").catch((e) => {
    //     console.log();
    //   });
    // });
  };

  return (
    <div className="main">
      <div className="parent-container">
        <div className="parent-subcontainer ">
          <div
            style={{
              fontWeight: "600",
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              height: "10%",
              height: "50%",
            }}
          >
            Your Bookings{" "}
          </div>
        </div>
        <div style={{ display: "block", height: "50%" }}>
          <div
            style={{
              fontWeight: "600",
              marginTop: "0.75rem",
              marginLeft: "0.75rem",
              height: "10%",
            }}
          >
            Select a Date:{" "}
          </div>
          <List
            style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
          >
            {busColl?.map((value) => (
              <IconButton
                key={value.id}
                size="medium"
                color="primary"
                sx={{ backgroundColor: "#F5F5F5" }}
                onClick={() => {
                  setsortedBooking(
                    busColl.filter((bus) => {
                      if (bus.data.bookingDate === value.data.bookingDate) {
                        return bus;
                      }
                    })
                  );
                }}
              >
                <div style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
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
      <Divider orientation="vertical" />
      <div className="mapcontainer">
        <div className="ticket-container">
          <article className="card fl-left">
            <section className="date">
              <time dateTime="23th feb">
                <span>{ticket.data?.bookingDate}</span>
                <span>
                  {findMonth(ticket.data?.bookingMonth).substring(0, 3)}
                </span>
              </time>
            </section>
            <section className="card-cont">
              <small>Bus Name: </small>
              <h3>{ticket.data?.busName}</h3>
              <div className="even-date">
                <i className="fa fa-calendar"></i>
                <time>
                  <span style={{ marginRight: "2%" }}>
                    {" "}
                    {ticket.data?.bookingDate},{" "}
                    {findMonth(ticket.data?.bookingMonth)},
                    {ticket.data?.bookingYear}
                  </span>
                  <span></span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker"></i>
                <p>
                  {currentBus?.startCity} TO {currentBus?.destinationCity}
                </p>
              </div>
              <button
                className="but"
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  handleOpen();
                }}
              >
                Cancel
              </button>
            </section>
          </article>
        </div>
      </div>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You Sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Proceeding with this action will result in the data being removed
            from the database permanantly.
            <Typography sx={{ mt: 2, color: "red" }}>
              Do you want to continue?
            </Typography>
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <div className="flex">
            <div className="mx-auto relative right-0 mt-2 ">
              <Button
                sx={{ marginRight: "8px" }}
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  deleteTicket();
                  handleClose();
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
