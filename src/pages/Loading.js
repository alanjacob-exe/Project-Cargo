import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";
import { PushSpinner } from "react-spinners-kit";
import { MagicSpinner } from "react-spinners-kit";

export function Loading() {
  return (
    <div className="main">
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default Loading;
