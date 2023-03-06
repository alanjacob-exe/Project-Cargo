import React from "react";
import "./bookedList.css"

export default function BookedList({busName}) {
  return (
    <>
      <div>
        <div className="bookingelement">{busName}</div>
      </div>{" "}
    </>
  );
}
