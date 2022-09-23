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
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/buses" activeStyle>
            Buses
          </NavLink>
          <NavLink to="/track" activeStyle>
            Track
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/Dev" activeStyle>
            Developers
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
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
