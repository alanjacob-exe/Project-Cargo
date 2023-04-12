import React from "react";
import "./alan.css";
export default function Alan(props) {
  return (
    <div className="top-container">
      <div className="header">
        <div className="name-container">
          Alan Jacob
          <div className="position">React Developer</div>
        </div>
        <div className="quote">
          <div className="quote-holder">
            {" "}
            One man’s crappy website is another man’s full time job.
          </div>{" "}
          <div className="name-holder">-Alan Jacob</div>{" "}
        </div>
      </div>

      <div className="content">
        Alan Jacob is a React developer from Kottayam.He was introduced to the
        world of coding from a young age. Being an IHRD product,he decided to
        learn more about the world of coding.Now, 8 years later here he is
        developing high quality React websites & designing User Interfaces
        simply out of passion. He's been the Technical lead of Voyage[Project
        Cargo] from day 1.<br></br>
        His hobbies includes designing and maintaining electronic
        circuits,watching movies,drawing,writing.
      </div>
    </div>
  );
}
