import { useContext, useState } from "react";
import { emailContext } from "../Sign-up/index";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import React from "react";

export default function Loggedin(props) {
  // var [level,setLevel]=useState("0")
  const level = useContext(emailContext);
  if (level == null) {
    console.log("verified1");
    console.log("current user email is" + level);

  } else {
    console.log("verified2");
    console.log("current user email is" + level.email);
  }
  return (
    <div>
      This is the proposed site for Logged in page
      {level.email}
      {/* <button onClick={() => signOut(auth)}>Sign Out</button> */}
    </div>
  );
}
