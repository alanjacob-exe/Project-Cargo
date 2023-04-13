import { useState } from "react";
import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Button } from "@mui/material";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "./registration.css";
import {
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";


import { useLocation, useNavigate } from "react-router-dom";

export default function FormExample5() {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [companyName, setcompanyName] = useState(null);
  const [busType, setbusType] = useState(null);
  const [busNumber, setbusNumber] = useState(null);
  const [startCity, setstartCity] = useState(null);
  const [destinationCity, setdestinationCity] = useState(null);
  const [totalSeats, settotalSeats] = useState(null);
  const [availableSeates, setavailableSeates] = useState(null);
  const [pricePerSeat, setpricePerSeat] = useState(null);
  const [bookedSeats, setbookedSeats] = useState(null);
  const [busName, setbusName] = useState(null);
  const [value, onChange] = useState("10:00");

  const location = useLocation();


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "30%",
    // border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addDoc(collection(db, "buses",busName), {
  //       companyName: companyName,
  //       busType: busType,
  //       busNumber: busNumber,
  //       startCity: startCity,
  //       destinationCity: destinationCity,
  //       totalSeats: totalSeats,
  //       availableSeats: availableSeates,
  //       pricePerSeat: pricePerSeat,
  //       bookedSeats: bookedSeats,
  //       busName: busName,
  //     });
  //     alert("inserted sucessfully");
  //     e.preventDefault();

  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const busCollection = doc(db, "buses", busNumber);
      await setDoc(busCollection, {
        companyName: companyName,
        busType: busType,
        busNumber: busNumber,
        startCity: startCity,
        destinationCity: destinationCity,
        totalSeats: totalSeats,
        availableSeats: availableSeates,
        pricePerSeat: pricePerSeat,
        bookedSeats: bookedSeats,
        busName: busName,
      });
      handleOpen();
    } catch (e) {
      console.log(e);
    }
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="reg-container color">
      <div className="reg-subcontainer">
        <h1 className="reg-formcontainer ">Bus Registration Form</h1>
        <form className="mt:6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="text" className="text-style">
              Company Name
            </label>
            <input
              onChange={(e) =>
                setcompanyName(capitalizeFirstLetter(e.target.value))
              }
              value={companyName}
              style={{ width: "100%" }}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="text" className="text-style">
              Bus Type
            </label>
            <input
              onChange={(e) => setbusType(e.target.value)}
              value={busType}
              type="text"
              style={{ width: "100%" }}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="text" className="text-style">
              Bus Number
            </label>
            <input
              onChange={(e) => setbusNumber(e.target.value.toUpperCase())}
              value={busNumber}
              type="text"
              style={{ width: "100%" }}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="text" className="text-style">
              Start city
            </label>
            <input
              onChange={(e) =>
                setstartCity(capitalizeFirstLetter(e.target.value))
              }
              value={startCity}
              style={{ width: "100%" }}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="text" className="text-style">
              DestinationCity
            </label>
            <input
              onChange={(e) =>
                setdestinationCity(capitalizeFirstLetter(e.target.value))
              }
              value={destinationCity}
              type="text"
              style={{ width: "100%" }}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label for="text" className="text-style">
              BusName
            </label>
            <input
              onChange={(event) =>
                setbusName(capitalizeFirstLetter(event.target.value))
              }
              value={busName}
              type="text"
              style={{ width: "100%" }}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "100%", backgroundColor: "black" }}
            >
              Register
            </Button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700"> </p>
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
            Inserted Sucessfully!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The Bus has Been Registered with Voyage Sucessfully.
            <Typography sx={{ mt: 2, color: "red" }}>
            </Typography>
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <div className="flex">
            <div className="mx-auto relative right-0 mt-2 ">
              
              <Button
                variant="contained"
                // color="sucess"
                onClick={() => {
                  handleClose();
                  navigate("/adminbuses")
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
