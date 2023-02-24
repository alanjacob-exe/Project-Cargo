import React, { useState } from 'react'
import Card from "react-credit-cards";
import "./just.css";
import jwt_decode from "jwt-decode";

// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
//   formatFormData,
// } from "./Modal.js";
import "react-credit-cards/es/styles-compiled.css";

export default function Credit(props) {
    const [number, setnumber] = useState("initialState")

    return (
        <>
             <Card
                number={number}
                // name={name}
                // expiry={expiry}
                // cvc={cvc}
                // focused={focused}
                callback={this.handleCallback}
              />{" "}
        </>
    )
}
