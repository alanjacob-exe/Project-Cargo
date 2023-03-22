import { Avatar, Button, Divider, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
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
import { db, auth } from "../../../firebase";
import Logo from "../../../Photos/bus2.png";
import MuiModal from "../../../Components/Modal/MuiModal";
import { Password } from "@mui/icons-material";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Just(props) {
  const [open, setOpen] = React.useState(false);
  const [Name, setName] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
        setIsLoading(false);
      }
    }
    return isValid;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const register = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    if (validatePassword()) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(res.user, {
          displayName: Name,
        });

        const userRef = doc(db, "users", res.user.email);
        await setDoc(userRef, {
          Name,
          email,
          password,
        });

        setIsLoading(false);

        alert("Registration Successfull");
      } catch (e) {
        // alert(e.message);
        setError(e.message.slice(9,))
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen flex justify-center py-12 ">
      <div className="h-[8vh] absolute top-0 bg-sky-900 w-screen">
        <div className="flex">
          <div className=" left-0 w-5 h-5 mt-2 ml-8 flex">
            <Avatar alt="project Cargo" src={Logo} />
          </div>
          <div className="text-white right-20  font-bold text-lg   top-0 absolute mt-3 ">
            Project Cargo
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white w-[90%] flex flex-col p-10 min-h-[50vh] space-y-4 border mt-5 ">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">User Registration </h4>
            <p className="text-secondary text-sm"></p>
          </div>
          <IconButton color="primary" component="label">
            <IoMdLogOut />
          </IconButton>
        </div>
        <Divider />
        <div className="w-[40%] m-auto h-full rounded-xl mt-5 ">
          {error && <div className="w-full border my-auto bg-red-200 rounded-sm">{error}</div>}

          <form name="registration_form" onSubmit={register}>
            <div className="mb-2">
              <label
                for="text"
                className="block text-sm font-semibold text-gray-800"
              >
                Enter User Name
              </label>
              <input
                onChange={(e) => setName(capitalizeFirstLetter(e.target.value))}
                value={Name}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="text"
                className="block text-sm font-semibold text-gray-800"
              >
                Enter User Email
              </label>
              <input
                onChange={(e) =>
                  setemail((e.target.value))
                }
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
                Enter User Password
              </label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="text"
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
                type="text"
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
        {/* <Button variant="outlined" onClick={handleOpen}>
          TestButton
        </Button> */}
      </div>
      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
