import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import Logo from "../../Photos/bus2.png";
import DarkVariantExample from "../../Components/Carousel/index";
import Navbar from "../../Components/Navbar";
import NavbarMobile from "../../Components/MobileNavbar/navbarMobile";

const About = () => {
  return (
    <div className="topontainer">
      <div className="navbarshow">
        <Navbar />
      </div>

      <div className="contentcontainer ">
        <div>
          <div className="mobnavbarcontainer">
            <div>
              <div className="nameholder">
                <div className="title1">Project Cargo</div>
                {/* <div className="logo">
                  <img src={Logo}></img>
                </div> */}
              </div>
              <div className="mobilenavbar">
                <NavbarMobile />
              </div>
            </div>
          </div>
          <div className="image">
            <DarkVariantExample />
          </div>
        </div>
        <div className="phonecontainer">
          <div className="purple">
            {/* <div>
              <div></div>
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute   rounded-circle shadow-5-strong"
              ></div>
            </div> */}
          </div>

          <div className="phoneglass">
            <div className="greetings">
              <div className="greettext">Hello, Welcome back!</div>
            </div>
          </div>
        </div>
        {/* <div>
          <MDBCard className="my-5 bg-glass card">
            <MDBCardBody className="p-5">
              <div></div>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="carousel">
          <div></div>
          
        </div> */}
      </div>
    </div>
  );
};

export default About;
