import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./adduser.css";
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

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Logo from "../../../Photos/bus2.png";

export default function AdminHome(props) {
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
        setError(e.message.slice(9));
        setIsLoading(false);
      }
    }
  };
  return (
    <main className="main ">
      <div className="navcontainer">
        <div style={{ display: "flex" }}>
          <div className=" logoholder">
            <Avatar alt="project Cargo" src={Logo} />
          </div>
          <div className="cargoholder">Project Cargo</div>
        </div>
      </div>
      <div className="main-container">
        <div style={{ display: "flex" }}>
          <div>
            <h4 style={{ fontWeight: 600 }}>User Registration</h4>
            <p
              style={{
                color: "black",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                right: "0px",
                display: "flex",
              }}
              className="text-secondary text-sm"
            ></p>
          </div>

          <div
            style={{ right: "0px", position: "relative", marginLeft: "auto" }}
          >
            <IconButton color="primary" component="label">
              <IoMdLogOut />
            </IconButton>
          </div>
        </div>
        <Divider />
        <div className="sub-container">
          <div className="login-holder">
          {error && (
              <div className="error-holder">
                {error}
              </div>
            )}
            <form name="registration_form" onSubmit={register}>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Enter User Name
                </label>
                <input
                  onChange={(e) =>
                    setName(capitalizeFirstLetter(e.target.value))
                  }
                  value={Name}
                  style={{ width: "100%" }}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Enter User Email
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  style={{ width: "100%" }}
                  required
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Enter User Password
                </label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  style={{ width: "100%" }}
                  value={password}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  value={confirmPassword}
                  required
                  style={{ width: "100%" }}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "black",
                    marginTop: "0.5rem",
                  }}
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
      </div>

      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
