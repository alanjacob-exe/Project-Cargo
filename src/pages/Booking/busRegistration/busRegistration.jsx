import { useState } from "react";
import React from "react";
import { collection, addDoc, Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Button } from "@mui/material";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";



export default function FormExample5() {
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

  console.log("time:"+value)
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
      alert("Inserted Sucessfully");
    } catch (e) {}
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-black-100 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
          Bus Registration Form
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
              onChange={(e) =>
                setbusName(capitalizeFirstLetter(e.target.value))
              }
              value={busName}
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
            <div>
              <TimePicker className="w-[20%]" onChange={onChange} value={"22:15:00"} />
            </div>
          </div>
          <div className="mt-6">
            <Button variant="contained" type="submit" sx={{}}>
              Register
            </Button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700"> </p>
      </div>
    </div>
  );
}
