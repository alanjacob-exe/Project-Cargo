import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

import DarkVariantExample from "../../Components/Carousel/index";
import Footer from "../../Components/Footer";
import CountrySelect from "../Signin";
import Navbar from "../../Components/Navbar";

const About = () => {
  return (
    <div className="top">
      <Navbar />

      <div className="height width color top ">
        <div className="title">
          <div style={{marginTop:'5%'}}>Project Cargo</div>
        </div>
        <div className="image">
            <DarkVariantExample />
          </div>{" "}
        <div>
        <div className="purple">
            <div></div>
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute   rounded-circle shadow-5-strong"
            ></div>
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
