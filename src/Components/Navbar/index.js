import React from "react";
import logo from "../../Photos/bus2.png";
import {
  Nav,
  NavLink,
  NavMenu,
  NavLink2,
} from "./NavbarElements";
import { Link } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [shown, setshown] = useState(false);

  const handleClick = (event) => {
    setshown((current) => !current);
  };

  return (
    <div>
      <Nav>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "60px",
            height: "60px",
            marginTop: "4px",
          }}
        />

        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <Link
            href="/buses"
            className="button"
            sx={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginRight: "23px",
            }}
          >
            Destination
          </Link>
          <Link
            href="/track"
            className="button"
            sx={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginRight: "23px",
            }}
          >
            Location
          </Link>
          <Link
            href="/dev"
            className="button"
            sx={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginRight: "23px",
            }}
          >
            Developers
          </Link>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <div className="sign">
          <NavLink2>
            <Link sx={{ textDecoration: "none", color: "#fff" }} href="/signin">
              Signin
            </Link>
          </NavLink2>
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
