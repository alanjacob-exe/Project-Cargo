import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

import DarkVariantExample from "../../Components/Carousel/index";
import Footer from "../../Components/Footer";
import CountrySelect from "../signup";

const About = () => {
  
  return (
    <div style={{ marginTop: "-4px", marginLeft: "-2px" }}>
      <div className="carousel">
        <DarkVariantExample />
      </div>
    </div>
  );
};

export default About;
