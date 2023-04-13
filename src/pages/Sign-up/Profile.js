import React from "react";
import "./Profile.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IoTicketSharp } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { MdEmail,MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"; // import Logo from "../Photos/bus2.png";
import { useAuthValue } from "../Sign-up/AuthContext";

import { Link } from "@mui/material";
import Contact from "../loggedin/bookedList/contact";
import Tickets from "../loggedin/tickets/tickets";
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import CancelTickets from "../loggedin/cancelTickets/cancel";
import EditProfile from "../loggedin/editProfile/editProfile.jsx";

export default function Just(props) {
  const navigate = useNavigate();
  const [isshown, setisshown] = useState(true);
  const { currentUser } = useAuthValue(); //for current user details
  const { isLoggedin } = useAuthValue();
  const [pageCount, setpageCount] = useState(0);

  const user = localStorage.getItem("user");
  // console.log(user)

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setisshown((current) => !current);
  };
  // console.log("welcome back!")
  // console.log(isshown);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Tickets />;
      case 1:
        return <Contact />;
      case 2:
        return <CancelTickets />;
      case 3:
        return <EditProfile />;
      default:
        return "Unknown step";
    }
  }
  const [page, setpage] = useState(0);

  const [users, setusers] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      setusers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  // console.log(users);

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
                  <IoMdLocate fontSize="large" />
                </div>
                <div
                  className="name"
                  onClick={() => {
                    setpage(0);
                  }}
                >
                  Track
                </div>
              </div>
            </div>
            
            <div
              className="sidebarelements"
              onClick={() => {
                setpage(1);
              }}
            >
              <div>
                <div className="icon">
                  <MdEmail fontSize="large" />
                </div>
                <div className="name">Contact</div>
              </div>
            </div>
            <div
              className="sidebarelements"
              onClick={() => {
                setpage(2);
              }}
            >
              <div>
                <div className="icon">
                  <MdDelete fontSize="large" />
                </div>
                <div className="name">Cancel Ticket</div>
              </div>
            </div>
            <div
              className="sidebarelements"
              // onClick={() => {
              //   navigate("/track");
              // }}
            >
              <div>
                <div className="icon">
                  <IoTicketSharp fontSize="large" />
                </div>
                <Link
                  href="/track"
                  state={
                    {
                      // busname: Bus.filter((item) => item.id === params.id),
                    }
                  }
                >
                  <Button
                    variant="text"
                    size="small"
                    sx={{ textDecoration: "none", marginLeft: "12px" }}
                    className="text-white font-sans hover:text-black"
                  >
                    Book Ticket
                  </Button>
                  {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
              Uploaded
            </Button> */}
                </Link>
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
      )}
      <div className="right-container color ">
        <div className="right-subcontainer">
          <div className="name-container">
            Welcome Back, {currentUser?.displayName}
          </div>
        </div>
        <div className="content-container">
          <div>{getStepContent(page)}</div>
        </div>
      </div>
      {/* <div className="holder color">
        <div className="dashboard bg-glass1">
          <div className="welcome ">
            Welcome Back! {currentUser?.displayName}
            <div className="details">{getStepContent(page)}</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
