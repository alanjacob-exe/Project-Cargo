import { Divider } from "@mui/material";
import React from "react";
import BusMap from "../../../Components/Busmap/busMap";

export default function Contact(props) {
  return (
    <div>
      <div className=" w-full h-full  absolute rounded-xl">
        <h1 className="font-semibold relative text-black mx-auto mt-3">
          Contact Us
          <Divider />
        </h1>
        <div className=" w-full h-[80%] relative flex">
          <div className="w-[50%] h-full  flex">
            <div className="m-auto flex relative">
              <div className="font-semibold text-lg">
                For Bus Registration
                <Divider className="text-black" />
                <div className="mt-2 mb-4">
                  Sreelakashmi (System Administrator)<br></br>
                  <div className="my-2">
                    {" "}
                    Phone Number:9388188332<br></br>
                  </div>
                  Email:sree@voyage.com<br></br>
                  <div className="mt-2">
                    Address: Voyage Inc.<br></br>
                    Technopark, Kazhakootam,<br></br>
                    Trivandrum
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider orientation="vertical"/>
          <div className="w-[50%] h-full  flex">
            <div className="m-auto flex relative">
              <div className="font-semibold text-lg">
                For User Booking Related Info
                <Divider className="text-black" />
                <div className="mt-2 mb-4">
                  Ashhad Biju Hameed (Booking Administrator)<br></br>
                  <div className="my-2">
                    {" "}
                    Phone Number:9074174436<br></br>
                  </div>
                  Email:ashhad@voyage.com<br></br>
                  <div className="mt-2">
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
