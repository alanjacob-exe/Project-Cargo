import React, { createContext, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";

import "./index.css";
import { useState } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthValue } from "./AuthContext";

import "./forms.css";
import { collection, setDoc, doc, query, onSnapshot } from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [user, setuser] = useState("0");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();
  const pageLocation = useLocation();

  const [users, setusers] = useState(null);
  const [busColl, setbusColl] = useState([]);

  const bookedData = () => {
    const q = query(collection(db, "conductors"));
    onSnapshot(q, (querySnapshot) => {
      setbusColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
        }))
      );
    });
  };

  useEffect(() => {
    bookedData();
  }, []);
  // console.log(busColl); // console.log("user data"+users.id);

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

  // useEffect(() => {
  //   if (!isLoggedin) {
  //     navigate("/signin");
  //     console.log("here"+isLoggedin)
  //   } else {
  //     navigate("/track");
  //   }
  // }, [isLoggedin]);

  // const register = (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (validatePassword()) {
  //     // Create a new user with email and password using firebase
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(() => {
  //         console.log("user created with email:"+email+"password"+password)
  //       })
  //       .catch((err) => setError(err.message));
  //   }
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // };

  // const login = async(e)=>{
  //   e.preventDefault();
  //   try{
  //     const res=await signInWithEmailAndPassword(auth,email,password)

  //   }
  //   catch(e)

  // }

  const resetPassword = async (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email Sent With Reset Link");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);

        // ..
      });
  };

  const handleBusConductor = (email) => {
    busColl.filter((value) => {
      if (value.id === email) return true;
    });
  };

  const register = async (e) => {
    // setIsLoading(true);

    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, {
        displayName: Name,
      });

      const userRef = doc(db, "users", res.user.email);
      await setDoc(userRef, {
        Name,
        email,
        password,
      });

      // localStorage.setItem("user", JSON.stringify(res.user));

      // setIsLoading(false);

      alert("Registration Successfull");
    } catch (e) {
      // setIsLoading(false);
      alert(e);
    }
  };

  // console.log("user=="+localStorage.getItem('user', JSON.stringify(user))

  const login = async (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com") {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        navigate("/adminhome");
      } catch (e) {
        setError(e);
      }
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (!auth.currentUser.emailVerified) {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                setTimeActive(true);
                navigate("/verify-email");
                localStorage.setItem("userEmail", email);
              })
              .catch((err) => alert(err.message));
          } else {
            navigate("/profile");
            localStorage.setItem("userEmail", email);

            // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }
        })
        .catch((err) => setError(err.message));
    }
  };

  //   console.log(auth.currentUser)

  // if(auth.currentUser==null)
  // {
  //   console.log("no user")

  // }
  // else{
  //   console.log(" user")

  // }
  // console.log("session storage "+sessionStorage.getItem('Auth Token'))

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
        className="p-4 background-radial-gradient overflow-hidden containercard"
      >
        <MDBTabsContent></MDBTabsContent>
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center   "
            style={{ marginTop: "-20%" }}
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3 "
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Be a part of <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>Voyage</span>
            </h1>

            <p
              className="px-3"
              style={{
                color: "hsl(218, 81%, 85%)",
                display: "overlay",
                marginTop: "0%",
              }}
            >
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
              className="bg-glass logincard"
              style={{ marginTop: "15%", borderRadius: "12px" }}
            >
              <MDBCardBody className="p-7 glass h-2/4">
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
                          style={{ borderRadius: "12px" }}
                        >
                          <p
                            className=" font-semibold text-xl"
                            style={{ color: "#495367" }}
                          >
                            Sign in
                          </p>

                          {/* <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                          > */}
                          {/* <MDBBtn
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
                          </div> */}

                          {/* <p className="text-center mt-3">or:</p> */}
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
                              className="bg-disabled"
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
                          <Button
                            sx={{ color: "#495367" }}
                            variant="text"
                            onClick={resetPassword}
                          >
                            Forgot password?
                          </Button>
                        </div>
                      </MDBTabsPane>

                      <MDBTabsPane show={justifyActive === "tab2"}>
                        <div className="text-center mb-3">
                          <p>Sign in with Email:</p>
                        </div>
                        {error && <div className="auth__error">{error}</div>}
                        <form name="registration_form" onSubmit={register}>
                          <MDBInput
                            wrapperClass="mb-4"
                            type="Name"
                            value={Name}
                            required
                            label="Name"
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                              backgroundColor: "#fff",
                              borderRadius: "12px",
                            }}
                          />
                          <MDBInput
                            wrapperClass="mb-4"
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
                          <MDBInput
                            wrapperClass="mb-4"
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
                            wrapperClass="mb-4"
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
                          <Button
                            sx={{ width: "100%" }}
                            variant="contained"
                            type="submit"
                          >
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

export const emailContext = createContext(auth.currentUser);
