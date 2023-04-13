import React, { useState } from "react";
import "./navbarMobile.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";

export default function NavbarMobile(props) {
  const [isshown, setisshown] = useState(false);
  const [container, setcontainer] = useState("expand");

  const [expand, setexpand] = useState("container");

  const handleShown = (e) => {
    setisshown((current) => !current);
    handleContainer();
    handleExpand();
  };

  const handleContainer = () => {
    if (container === "expand") setcontainer("expand2");
    if (container === "expand2") setcontainer("expand");
  };

  const handleExpand = () => {
    if (expand === "container") setexpand("container2");
    if (expand === "container2") setexpand("container");
  };
  return (
    <div>
      <div className="cont">
        <div className="burger" onClick={handleShown}>
          <MenuIcon fontSize="large" sx={{color:"#000"}} />
        </div>
        <div> </div>
      </div>
      <div className={container}>
        <div>
          {isshown && (
            <div>
              <div className="closecontainer">

                <div className="close" onClick={handleShown}>
                  <div className="cbutton">
                    <CloseIcon sx={{color:"#000"}} fontSize="large" />
                  </div>
                </div>
              </div>

              <div className="itemcontainer">
              <div className="elements">
                <div className="item">
                  <Link sx={{ color: "#000", fontSize: "25px",textDecoration: 'none' }} href="/track">
                    Track
                  </Link>
                </div>
              </div>
              <div className="elements">
                <div className="item">
                  <Link sx={{ color: "#000", fontSize: "25px",textDecoration: 'none',classes:"item" }} href="/Dev">
                    Developers
                  </Link>
                </div>
              </div>
              <div className="elements">
                <div className="item">
                  <Link sx={{ color: "#000", fontSize: "25px",textDecoration: 'none' }} href="/bus">
                    Destination
                  </Link>
                </div>
              </div>
              <div className="elements">
                <div className="item">
                  <Link sx={{ color: "#000", fontSize: "25px",textDecoration: 'none' }} href="/help">
                    Help
                  </Link>
                </div>
              </div>
              <div className="elements">
                <div className="item">
                  <Link sx={{ color: "#000", fontSize: "25px",textDecoration: 'none' }} href="/signin">
                    Sign in
                  </Link>
                </div>
              </div>
              </div>
            </div>
          )}{" "}
        </div>
      </div>
      {/* {isshown && <div className={container}>heyyyy</div>} */}
    </div>
  );
}
