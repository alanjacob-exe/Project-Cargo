import React from 'react'
import "./index.css"

import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";
import { Button } from "@mui/material"; // import Logo from "../Photos/bus2.png";
import { useAuthValue } from "../Sign-up/AuthContext";
import Details from "../Payment/Details";
import Form from "../Payment/Form";
import PayCard from "../Payment/PayCard";
import Success from "../Payment/Success";
import PaymentMode from "../Payment/PaymentMode";
import { Link } from "@mui/material";
import Ticket from "../loggedin/ticket";
import Contact from "../loggedin/bookedList/contact";

export default function Index(props) {
  const navigate=useNavigate()
  

  return (
    <div className="sidebar">
          <div>
            <div className="sidebartopelement">Project Cargo </div>
          </div>
          <div>
            <div className="sidebarelements">
              <div>
                <div className="icon">
                  <BookOnlineIcon fontSize="small" />
                </div>
                <div className="name" onClick={()=>{}}>Booking</div>
              </div>
            </div>
            <div className="sidebarelements">
              <div>
                <div className="icon">
                  <AccountCircleIcon fontSize="small" />
                </div>
                <div className="name">Profile</div>
              </div>
            </div>
            <div className="sidebarelements" onClick={()=>{}}>
              <div>
                <div className="icon">
                  <ContactPhoneIcon fontSize="small" />
                </div>
                <div className="name">Contact</div>
              </div>
            </div>
            <div className="sidebarelements" onClick={()=>{}}>
              <div>
                <div className="icon">
                  <ContactPhoneIcon fontSize="small" />
                </div>
                <div className="name">Book Ticket</div>
              </div>
            </div>
          </div>
          <div>{/* <div className="logo">{Logo}</div> */}</div>
          <div>
            <div
              className="signout"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("user");
                navigate("/signin");
              }}
            >
              Not You? Signout
              <div className="signouticon">
                <ExitToAppIcon />
              </div>
            </div>
          </div>
        </div>
  )
}
