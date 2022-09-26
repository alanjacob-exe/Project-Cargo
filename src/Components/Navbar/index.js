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
            marginLeft: "-210px",
            width: "70px",
            height: "70px",
            marginTop: "6px",
          }}
        />

        <Bars />

        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/buses">Buses</NavLink>
          <NavLink to="/track">Track</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/Dev">Developers</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
