import { useState } from "react";
import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Button } from "@mui/material";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useLocation } from "react-router-dom";
import MuiModal from "../../../Components/Modal/MuiModal";
import "./busedit.css";

export default function BusEdit() {
  const location = useLocation();
  // console.log(location.state.busname[0]?.id);
  const [companyName, setcompanyName] = useState(
    location.state.busname[0].companyName
  );
  const [busType, setbusType] = useState(location.state.busname[0].busType);
  const [busNumber, setbusNumber] = useState(
    location.state.busname[0].busNumber
  );
  const [startCity, setstartCity] = useState(
    location.state.busname[0].startCity
  );
  const [destinationCity, setdestinationCity] = useState(
    location.state.busname[0].destinationCity
  );
  const [totalSeats, settotalSeats] = useState(
    location.state.busname[0].totalSeats
  );
  const [availableSeates, setavailableSeates] = useState(
    location.state.busname[0].availableSeats
  );
  const [pricePerSeat, setpricePerSeat] = useState(
    location.state.busname[0].pricePerSeat
  );
  const [bookedSeats, setbookedSeats] = useState(
    location.state.busname[0].bookedSeats
  );
  const [busName, setbusName] = useState(location.state.busname[0].busName);
  const [value, onChange] = useState("10:00");

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bodyText = " has been updated successfully!";
  // console.log(`${busName}${bodyText}`);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const busCollection = doc(db, "buses", busName);
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
    } catch (e) {}
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="container">
      <div className="content-container">
        <h1 className="heading">
          Bus Editing Form
        </h1>
        <form style={{marginTop:"1.5rem"}} onSubmit={handleSubmit}>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Company Name
            </label>
            <input
              onChange={(e) =>
                setcompanyName(capitalizeFirstLetter(e.target.value))
              }
              value={companyName}
              type="text"
              placeholder={location.state.busname[0].companyName}
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Bus Type
            </label>
            <input
              onChange={(e) => setbusType(e.target.value)}
              value={busType}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Bus Number
            </label>
            <input
              onChange={(e) => setbusNumber(e.target.value.toUpperCase())}
              value={busNumber}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Start city
            </label>
            <input
              onChange={(e) =>
                setstartCity(capitalizeFirstLetter(e.target.value))
              }
              value={startCity}
              type="text"
              disabled={true}
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              DestinationCity
            </label>
            <input
              disabled={true}
              onChange={(e) =>
                setdestinationCity(capitalizeFirstLetter(e.target.value))
              }
              value={destinationCity}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Available Seats
            </label>
            <input
              onChange={(e) => setavailableSeates(e.target.value)}
              value={availableSeates}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Total Seats
            </label>
            <input
              onChange={(e) => settotalSeats(e.target.value)}
              value={totalSeats}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Price per Seat
            </label>
            <input
              onChange={(e) => setpricePerSeat(e.target.value)}
              value={pricePerSeat}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              Booked Seats
            </label>
            <input
              onChange={(e) => setbookedSeats(e.target.value)}
              value={bookedSeats}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            <label
              for="text"
              className="label-text"
            >
              BusName
            </label>
            <input
              disabled={true}
              onChange={(e) =>
                setbusName(capitalizeFirstLetter(e.target.value))
              }
              value={busName}
              type="text"
              className="label-main"
            />
          </div>
          <div style={{marginBottom:"0.5rem"}}>
            {/* <label
              for="text"
              className="label-text"
            >
              Booked Seats
            </label>
            <div>
              <TimePicker className="w-[20%]" onChange={onChange} value={"22:15:00"} />
            </div> */}
          </div>
          <div className="mt-9 ">
            <Button variant="contained" type="submit" sx={{ width: "100%  " }}>
              Update
            </Button>
          </div>
        </form>
      </div>
      <MuiModal
        open={open}
        handleclose={() => setOpen(false)}
        heading="Success"
        content={`${busName}${bodyText}`}
      ></MuiModal>
    </div>
  );
}
