import React from "react";
import "./just.css";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Logo from "../Photos/bus2.png";

export default function Just(props) {
  const navigate = useNavigate();
  return (
    <div>
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
              <div className="name">Bookings</div>
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
          <div className="sidebarelements">
            <div>
              <div className="icon">
                <ContactPhoneIcon fontSize="small" />
              </div>
              <div className="name">Contact</div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="logo">{Logo}</div> */}
        </div>
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
    </div>
  );
}
