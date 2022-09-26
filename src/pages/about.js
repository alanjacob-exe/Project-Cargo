import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

import DarkVariantExample from "../Components/Carousel";

const About = () => {
  return (
    <div style={{marginTop:'-4px',marginLeft:'-2px'}} >
      <div className="carousel" >
        <DarkVariantExample />
      </div>
      <div >
      </div>
    </div>
  );
};

export default About;
