import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { TextField } from "@mui/material";
import { Button } from '@mui/material';


import Form from "react-bootstrap/Form";

import "./index.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./forms.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden height"
      >
        <MDBRow className="margin">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Be a part of <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>Project Cargo</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Be a part of our online community and get updated with latest news
              and trends by becoming a member! What are you waiting for? Join us
              today.
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6"></MDBCol>

                  <MDBCol col="6"></MDBCol>
                </MDBRow>

                <div className="auth">
                  <h1 style={{color:'#fff', padding:'0'}}>Register</h1>
                  {error && <div className="auth__error">{error}</div>}
                  <form name="registration_form" onSubmit={register}>
                    <TextField
                      type="email"
                      value={email}
                      label="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{backgroundColor:'#fff',borderRadius:'12px'}}

                    />

                    <TextField
                      type="password"
                      value={password}
                      required
                      label="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{backgroundColor:'#fff',borderRadius:'12px'}}

                    />

                    <TextField
                      type="password"
                      value={confirmPassword}
                      required
                      label="Confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      sx={{backgroundColor:'#fff',borderRadius:'12px'}}
                    />

                    <Button variant="contained" type="submit" >
                      Register
                    </Button>
                  </form>
                </div>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
