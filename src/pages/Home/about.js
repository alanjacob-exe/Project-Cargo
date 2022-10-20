import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

import DarkVariantExample from "../../Components/Carousel/index";
import Footer from "../../Components/Footer";
import CountrySelect from "../Signin";
import Navbar from "../../Components/Navbar";

const About = () => {
  
  return (
    <div style={{ marginTop: "-4px", marginLeft: "-2px" }}><Navbar/>
      <div className="carousel">
        <DarkVariantExample />
      </div>
    </div>
  );
};

export default About;
