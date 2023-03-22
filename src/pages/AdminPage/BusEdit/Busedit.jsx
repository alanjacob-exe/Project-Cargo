import { useState } from "react";
import React from "react";
import { collection, addDoc, Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Button } from "@mui/material";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useLocation } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import MuiModal from "../../../Components/Modal/MuiModal";


export default function BusEdit() {
  const location = useLocation();
  console.log(location.state.busname[0].id);
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

  console.log("time:" + value);
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
    const handleOpen =  () => setOpen(true);
    const handleClose = () => setOpen(false);
  
const bodyText=" has been updated successfully!"
console.log(`${busName}${bodyText}`)
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
      handleOpen()
    } catch (e) {}
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-[60%] p-6 m-auto bg-white rounded-md shadow-xl shadow-black-300 lg:max-w-xl border">
        <h1 className="text-3xl font-semibold text-center text-black underline uppercase ">
          Bus Editing Form
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
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
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Bus Type
            </label>
            <input
              onChange={(e) => setbusType(e.target.value)}
              value={busType}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Bus Number
            </label>
            <input
              onChange={(e) => setbusNumber(e.target.value.toUpperCase())}
              value={busNumber}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
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
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
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
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Available Seats
            </label>
            <input
              onChange={(e) => setavailableSeates(e.target.value)}
              value={availableSeates}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Total Seats
            </label>
            <input
              onChange={(e) => settotalSeats(e.target.value)}
              value={totalSeats}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Price per Seat
            </label>
            <input
              onChange={(e) => setpricePerSeat(e.target.value)}
              value={pricePerSeat}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Booked Seats
            </label>
            <input
              onChange={(e) => setbookedSeats(e.target.value)}
              value={bookedSeats}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
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
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            {/* <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Booked Seats
            </label>
            <div>
              <TimePicker className="w-[20%]" onChange={onChange} value={"22:15:00"} />
            </div> */}
          </div>
          <div className="mt-9 ">
            <Button variant="contained" type="submit" sx={{width:"100%  "}}>
              Update
            </Button>
          </div>
        </form>

      </div>
      <MuiModal open={open} handleclose={() => setOpen(false)} heading="Success" content={`${busName}${bodyText}`}></MuiModal>

    </div>
  );
}