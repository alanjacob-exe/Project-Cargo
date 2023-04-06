import { Divider } from "@mui/material";
import React from "react";
import BusMap from "../../../Components/Busmap/busMap";
import "./contacts.css";

export default function Contact(props) {
  return (
    <div>
      <div className="main">
        <h1 className="main-heading">
          Contact Us
          <Divider />
        </h1>
        <div className="container">
          <div style={{ width: "50%", height: "100%", display: "flex",float:"left" }}>
            <div
              style={{ margin: "auto", display: "flex", position: "relative" }}
            >
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                }}
              >
                For Bus Registration
                <Divider className="text-black" />
                <div style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
                  Sreelakashmi (System Administrator)<br></br>
                  <div style={{ marginTop: ".5rem", marginBottom: "0.5rem" }}>
                    {" "}
                    Phone Number:9388188332<br></br>
                  </div>
                  Email:sree@voyage.com<br></br>
                  <div style={{ marginTop: "0.5rem" }}>
                    Address: Voyage Inc.<br></br>
                    Technopark, Kazhakootam,<br></br>
                    Trivandrum
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Divider orientation="vertical" /> */}
          <div className="seperater"></div>
          <div style={{ width: "50%", height: "100%", display: "flex", }}>
            <div
              style={{ margin: "auto", display: "flex", position: "relative" }}
            >
             <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                }}
              >
                For User Booking Related Info
                <Divider className="text-black" />
                <div style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
                  Ashhad Biju Hameed (Booking Administrator)<br></br>
                  <div style={{ marginTop: ".5rem", marginBottom: "0.5rem" }}>
                    {" "}
                    Phone Number:9074174436<br></br>
                  </div>
                  Email:ashhad@voyage.com<br></br>
                  <div style={{ marginTop: "0.5rem" }}>
                    Address: Voyage Inc.<br></br>
                    Technopark, Kazhakootam,<br></br>
                    Trivandrum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
