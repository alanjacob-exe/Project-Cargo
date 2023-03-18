import React from "react";
import "./Profile.css";
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


export default function Just(props) {
  const navigate = useNavigate();
  const [isshown, setisshown] = useState(true);
  const { currentUser } = useAuthValue(); //for current user details
  const { isLoggedin } = useAuthValue();
  const [pageCount, setpageCount] = useState(0)

  const user = localStorage.getItem("user");
  // console.log(user)

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setisshown((current) => !current);
  };
  // console.log("welcome back!")
  console.log(isshown);
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());
  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  // function getPageContent(step) {
  //   switch (step) {
  //     case 0:
  //       return <Details />;
  //     case 1:
  //       return <PaymentMode />;
  //     case 2:
  //       return <PayCard />;
  //     case 3:
  //       return <Success />;
  //     default:
  //       return "Unknown step";
  //   }
  // }

  // <Link href="/track" sx={{color:"#fff"}}>Book</Link>
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Ticket/>;
      case 1:
        return <Contact/>;
      // case 2:
      //   return <PayCard />;
      // case 3:
      //   return <Success />;
      default:
        return "Unknown step";
    }
  }
  const [page, setpage] = useState(0)
  return (
    <div className="parent">
      {isshown && (
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
                <div className="name" onClick={()=>{setpage(0)}}>Booking</div>
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
            <div className="sidebarelements" onClick={()=>{setpage(1)}}>
              <div>
                <div className="icon">
                  <ContactPhoneIcon fontSize="small" />
                </div>
                <div className="name">Contact</div>
              </div>
            </div>
            <div className="sidebarelements" onClick={()=>{ navigate("/track")}}>
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
                navigate("/");
              }}
            >
              Not You? Signout
              <div className="signouticon">
                <ExitToAppIcon />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="holder color">
        {/* <div className="">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
        </div> */}
        <div className="dashboard bg-glass1">
          <div className="welcome ">
            Welcome Back! {currentUser?.displayName}
            {/* <Button onClick={handleClick}/> */}
            <div className="details">{getStepContent(page)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
