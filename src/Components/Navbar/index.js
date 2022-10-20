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

        <Bars />

        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/buses">Destinations</NavLink>
          <NavLink to="/track">Location</NavLink>
          <NavLink to="/contact">Developers</NavLink>
          <NavLink to="/Dev">Contact Us</NavLink>
          <NavLink to="/help">Help</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
}

export default Navbar;
