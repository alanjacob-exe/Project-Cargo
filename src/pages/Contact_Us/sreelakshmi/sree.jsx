import React from "react";
import "./sree.css";

export default function Sree(props) {
  return (
    <div className="container">
      <div className="header">
        <div className="name-container">
          Sreelakshmi
          <div className="position">System Administrator</div>
        </div>
        <div className="quote">
          <div className="quote-holder">
            {" "}
            My code doesn't work, I have no idea why. My code works, I have no
            idea why!.
          </div>{" "}
          <div className="name-holder">-Sreelakshmi</div>{" "}
        </div>
      </div>

      <div className="content">
        Creative Head Filled with profound ideas that made our website what it
        is today, years of working at top companies all over the globe has paid
        off exceptionally. She's been the System Administrator of Voyage
        [Project Cargo] from day 1. She's an exceptional resource person, You need anything related to the project?
        she's your gal.<br></br>
        Her hobbies includes Dancing,watching movies,drawing,writing.
      </div>
    </div>
  );
}
