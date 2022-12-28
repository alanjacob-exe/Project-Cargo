import React, { createContext } from "react";
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
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import Form from "react-bootstrap/Form";
import { useContext } from "react";

import "./index.css";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";

import "./forms.css";
import userEvent from "@testing-library/user-event";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [user, setuser]=useState("0")
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();
  console.log(email);
  console.log(password);

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
        .then(() => {
          console.log("user created with email:"+email+"password"+password)
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if(!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          })
        .catch(err => alert(err.message))
      }else{
        navigate('/profile')
      }
      })
      .catch((err) => setError(err.message));
  };



  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden height"
      >
        <MDBTabsContent></MDBTabsContent>
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
            style={{ marginTop: "-150px" }}
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

            <MDBCard
              className="my-5  bg-glass"
              style={{ marginBottom: "400px", borderRadius: "12px" }}
            >
              <MDBCardBody className="p-7 glass">
                <MDBCol col="6">
                  <div style={{ padding: "1.25rem" }}>
                    <MDBTabs
                      pills
                      justify
                      className="mb-3 d-flex flex-row justify-content-between"
                    >
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleJustifyClick("tab1")}
                          active={justifyActive === "tab1"}
                        >
                          Login
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleJustifyClick("tab2")}
                          active={justifyActive === "tab2"}
                        >
                          Register
                        </MDBTabsLink>
                      </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                      <MDBTabsPane show={justifyActive === "tab1"}>
                        <div
                          className="text-center mb-3"
                          style={{ borderRadius: "12px", borderColor: "red" }}
                        >
                          <p>Sign in with:</p>

                          <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                          >
                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="google" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="github" size="sm" />
                            </MDBBtn>
                          </div>

                          <p className="text-center mt-3">or:</p>
                        </div>

                        <div>
                          {error && <div className="auth__error">{error}</div>}
                          <form onSubmit={login} name="login_form">
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Email address"
                              id="form1"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Password"
                              id="form2"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <MDBBtn type="submit" className="mb-4 w-100">
                              Sign in
                            </MDBBtn>
                          </form>
                        </div>

                        <div className="d-flex justify-content-between mx-4 mb-4">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckDefault"
                            label="Remember me"
                          />
                          <a href="!#">Forgot password?</a>
                        </div>

                        <p className="text-center">
                          Not a member? <a href="#!">Register</a>
                        </p>
                      </MDBTabsPane>

                      <MDBTabsPane show={justifyActive === "tab2"}>
                        <div className="text-center mb-3">
                          <p>Sign in with:</p>

                          <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                          >
                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="google" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: "#1266f1" }}
                            >
                              <MDBIcon fab icon="github" size="sm" />
                            </MDBBtn>
                          </div>

                          <p className="text-center mt-3">or:</p>
                        </div>
                        {error && <div className="auth__error">{error}</div>}

                        <form name="registration_form" onSubmit={register}>
                          <MDBInput
                            type="email"
                            value={email}
                            label="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                              backgroundColor: "#fff",
                              borderRadius: "12px",
                            }}
                          />
                          <br></br>
                          <MDBInput
                            type="password"
                            value={password}
                            required
                            label="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                              backgroundColor: "#fff",
                              borderRadius: "22px",
                            }}
                          />
                          <MDBInput
                            type="password"
                            value={confirmPassword}
                            required
                            label="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={{
                              backgroundColor: "#fff",
                              borderRadius: "12px",
                            }}
                          />
                          <div className="d-flex justify-content-center mb-4">
                            <MDBCheckbox
                              name="flexCheck"
                              id="flexCheckDefault"
                              label="I have read and agree to the terms"
                            />
                          </div>
                          <Button variant="contained" type="submit">
                            Signup
                          </Button>{" "}
                        </form>
                      </MDBTabsPane>
                    </MDBTabsContent>
                  </div>
                </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;

export const emailContext=createContext(auth.currentUser);

