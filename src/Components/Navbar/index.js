import React from "react";
import logo from "../../Photos/bus2.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink2,
} from "./NavbarElements";
import { Link } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [shown, setshown] = useState(false);

  const handleClick = (event) => {
    setshown((current) => !current);
  };

  console.log(shown)
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

        

        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/buses">Destinations</NavLink>
          <Link
            href="/track"
            className="button"
            sx={{ color: "#fff", fontSize: "18px" ,textDecoration:"none"}}
          >
            Location
          </Link>
          <NavLink to="/Dev">Developers</NavLink>
          <NavLink to="/help">Help</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
          
        <div className="sign">
          <NavLink2><Link sx={{textDecoration:"none",color:"#fff"}}href="/signin">Signin</Link></NavLink2>
          {/* <Link
            href="/signin"
            className="button"
            sx={{ color: "#fff", fontSize: "18px", marginTop: "5%" }}
          >
            Signin
          </Link> */}
        </div>
        {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
      </Nav>
    </div>
  );
};

export default Navbar;
