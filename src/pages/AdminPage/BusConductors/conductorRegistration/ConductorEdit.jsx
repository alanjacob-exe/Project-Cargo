import { useState, useEffect } from "react";
import React from "react";
import { db } from "../../../../firebase";
import { Button } from "@mui/material";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useLocation } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import MuiModal from "../../../../Components/Modal/MuiModal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { Divider } from "@material-ui/core";

export default function BusEdit() {
  const location = useLocation();
  //   console.log(location.state.busname[0].id);
  const [Name, setName] = useState(location.state.details[0].Name);
  const [email, setemail] = useState(location.state.details[0].email);
  const [password, setpassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [busid, setbusid] = useState("");
  const [error, seterror] = useState("");
  const [age, setage] = useState("");
  const [isLoading, setisLoading] = useState(false)

  //   console.log("time:" + value);
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
  console.log(location.state.details[0].Name)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const busCollection = doc(db, "conductors", email);
      await setDoc(busCollection, {
        Name,
        email,
        busid,
        password,
      });
      handleOpen();
    } catch (e) {}
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const BusCollection = () => {
    const q = query(collection(db, "buses"));
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
    BusCollection();
  }, []);

  const [busColl, setbusColl] = useState([]);

  return (
    <div className="w-full h-full m-auto flex">
      <div className="w-[80%] relative flex flex-col justify-center min-h-screen overflow-hidden my-auto mx-auto">
        <div className="w-[50%] m-auto h-full rounded-xl p-12  border-2 shadow-lg	 ">
          <div className="text-black font-semibold text-3xl  mb-5">
            Edit Conductor
            <Divider />
          </div>
          {error && (
            <div className="w-full border my-auto bg-red-200 rounded-sm">
              {error}
            </div>
          )}

          <div className=" ">
            <form name="registration_form">
              <div className="mb-2">
                <label
                  for="text"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Enter Name
                </label>
                <input
                  onChange={(e) =>
                    setName(capitalizeFirstLetter(e.target.value))
                  }
                  value={Name}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  for="text"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Select bus
                </label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel required id="demo-simple-select-label">Bus</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Bus"
                      // onChange={handleChange}
                      className="h-[50%]"
                    >
                      {busColl?.map((value) => (
                        <MenuItem
                          key={value.id}
                          value={value.id}
                          onClick={() => {
                            setbusid(value.id);
                          }}
                        >
                          {value.data.busName}
                        </MenuItem>
                      ))}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="mb-2">
                <label
                  for="text"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Enter Email
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  for="text"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Enter Password
                </label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  for="text"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <Button
                  className="w-full mt-2 bg-black"
                  variant="contained"
                  type="submit"
                >
                  {isLoading ? "Loading.." : "Sign up"}{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <MuiModal
          open={open}
          handleclose={() => setOpen(false)}
          heading="Success"
          content={"heyyy"}
        ></MuiModal>
      </div>
    </div>
  );
}
