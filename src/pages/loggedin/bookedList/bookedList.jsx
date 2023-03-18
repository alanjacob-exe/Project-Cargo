import React from "react";
import "./bookedList.css"

export default function BookedList({busName,onclick}) {
  return (
    <>
      <div>
        <div className="bookingelement" onClick={onclick}>{busName}</div>
      </div>{" "}
    </>
  );
}
