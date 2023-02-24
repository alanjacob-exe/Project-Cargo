import React from "react";
import logo from "../../Photos/bus2.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { Link } from "@mui/material";




const Navbar = () => {
  return (
    <div>
      <Nav>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "70px",
            height: "70px",
            marginTop: "6px",
          }}
        />

        <Bars
        />

        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/buses">Destinations</NavLink>
          <Link href="/track" className="button" sx={{color:"#fff", fontSize:"18px"}}>
            Location
          </Link>
          <NavLink to="/Dev">Developers</NavLink>
          <NavLink to="/help">Help</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <Link href="/signin" className="button" sx={{color:"#fff", fontSize:"18px",marginTop:"2.5%"}}>Signin</Link>
        {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
      </Nav>
    </div>
  );
};

export default Navbar;
