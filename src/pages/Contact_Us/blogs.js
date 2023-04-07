import React from "react";
import BingMap from "../../Components/BingMaps/BingMaps";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./blogs.css";
import Navbar from "../../Components/Navbar";
import Alan from "../Contact_Us/Alan/Alan";
import Jacob from "../../Photos/alan.jpg";
import Biju from "../../Photos/ashhad.jpeg";
import { Link } from "@mui/material";
import { useState } from "react";
import Ashhad from "./Ashhad/Ashhad";
import Lachu from "../../Photos/lakshmi.jpeg";
import Gpz from "../../Photos/Gopika.jpeg";
import Sree from "../Contact_Us/sreelakshmi/sree";
import Gopika from "./Gopika/gopika";
const Blogs = () => {
  const [step, setstep] = useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Alan />;
      case 1:
        return <Ashhad />;
      case 2:
        return <Sree />;
      case 3:
        return <Gopika />;
      default:
        return "Unknown step";
    }
  }
  return (
    <div>
      <div className="parent">
        <Navbar />
        <div className="main-container">
          <div className="sub-container">
            <div className="item-holder">
              <div
                className="item-container1"
                onClick={() => {
                  setstep(0);
                }}
              >
                <img className="img" src={Jacob}></img>
                <div className="alan">
                  <span className="name">
                    Alan Jacob
                    <span className="position">React Developer</span>
                    <span className="media">
                      <Link
                        href="https://github.com/alanjacob-exe"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        Github
                      </Link>
                    </span>
                    <span className="media2">
                      <Link
                        href="https://www.linkedin.com/in/alan-jacob-aab96a1b5/"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        LinkedIn
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="item-container1"
                onClick={() => {
                  setstep(1);
                }}
              >
                <img className="img" src={Biju}></img>
                <div className="alan">
                  <span className="name">
                    Ashhad Biju
                    <span className="position">React Native Developer</span>
                    <span className="media">
                      <Link
                        href="https://github.com/alanjacob-exe"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        Github
                      </Link>
                    </span>
                    <span className="media2">
                      <Link
                        href="https://www.linkedin.com/in/alan-jacob-aab96a1b5/"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        LinkedIn
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="item-container1"
                onClick={() => {
                  setstep(2);
                }}
              >
                <img className="img" src={Lachu}></img>
                <div className="alan">
                  <span className="name">
                    Sreelakshmi
                    <span className="position">System Administrator</span>
                    <span className="media">
                      <Link
                        href="https://github.com/alanjacob-exe"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        Github
                      </Link>
                    </span>
                    <span className="media2">
                      <Link
                        href="https://www.linkedin.com/in/alan-jacob-aab96a1b5/"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        LinkedIn
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="item-bottom">
              <div
                className="item-container1"
                onClick={() => {
                  setstep(3);
                }}
              >
                <img className="img" src={Gpz}></img>
                <div className="alan">
                  <span className="name">
                    Gopika
                    <span className="position">Backend Engineer</span>
                    <span className="media">
                      <Link
                        href="https://github.com/alanjacob-exe"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        Github
                      </Link>
                    </span>
                    <span className="media2">
                      <Link
                        href="https://www.linkedin.com/in/alan-jacob-aab96a1b5/"
                        sx={{ fontSize: "20px", color: "#fff" }}
                      >
                        LinkedIn
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
              <div className="details-container">{getStepContent(step)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
