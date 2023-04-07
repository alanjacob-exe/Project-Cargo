import React from "react";
import "./gopika.css";
export default function Gopika(props) {
  return (
    <div className="container">
      <div className="header">
        <div className="name-container">
          Gopika
          <div className="position">Backend Developer</div>
        </div>
        <div className="quote">
          <div className="quote-holder">
            {" "}
            If at first you don’t succeed; call it version 1.0
          </div>{" "}
          <div className="name-holder">-Gopika</div>{" "}
        </div>
      </div>

      <div className="content">
        Backend Dev, The ambitious exec that helped build our website by
        creating a strategical plan with progress in mind. Years of experience
        leading teams has shown. She's been the Backend Developer of Voyage
        [Project Cargo] from day 1. She's an exceptional Tester too.Have you
        been cooking your brains,searching for the one bug thats messing up your
        code? Gopz to the rescue!
        <br></br>
        Her hobbies includes Dancing,Instagramming,drawing,writing, listening to
        music.
      </div>
    </div>
  );
}
