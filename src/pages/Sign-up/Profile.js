import React from "react";
import "./Profile.css";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useState, useEffect} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"; // import Logo from "../Photos/bus2.png";
import { useAuthValue } from "../Sign-up/AuthContext";
import Details from "../Payment/Details";
import Form from "../Payment/Form";
import PayCard from "../Payment/PayCard";
import Success from "../Payment/Success";
import PaymentMode from "../Payment/PaymentMode";
import { Link } from "@mui/material";
import Contact from "../loggedin/bookedList/contact";
import Tickets from "../loggedin/tickets/tickets";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Just(props) {
  const navigate = useNavigate();
  const [isshown, setisshown] = useState(true);
  const { currentUser } = useAuthValue(); //for current user details
  const { isLoggedin } = useAuthValue();
  const [pageCount, setpageCount] = useState(0);

  const user = localStorage.getItem("user");
  // console.log(user)

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setisshown((current) => !current);
  };
  // console.log("welcome back!")
  console.log(isshown);
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());
  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  // function getPageContent(step) {
  //   switch (step) {
  //     case 0:
  //       return <Details />;
  //     case 1:
  //       return <PaymentMode />;
  //     case 2:
  //       return <PayCard />;
  //     case 3:
  //       return <Success />;
  //     default:
  //       return "Unknown step";
  //   }
  // }

  // <Link href="/track" sx={{color:"#fff"}}>Book</Link>
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Tickets/>;
      case 1:
        return <Contact />;
      // case 2:
      //   return <PayCard />;
      // case 3:
      //   return <Success />;
      default:
        return "Unknown step";
    }
  }
  const [page, setpage] = useState(0);

  const [users, setusers] = useState(null)

  useEffect(() => {
    const q = query(
      collection(db, "users",)
    );
    onSnapshot(q, (querySnapshot) => {
      setusers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(users)


  return (
    <div className="parent">
      {isshown && (
        <div className="sidebar">
          <div>
            <div className="sidebartopelement">Project Cargo </div>
          </div>
          <div>
            <div className="sidebarelements">
              <div>
                <div className="icon">
                  <BookOnlineIcon fontSize="small" />
                </div>
                <div
                  className="name"
                  onClick={() => {
                    setpage(0);
                  }}
                >
                  Booking
                </div>
              </div>
            </div>
            <div className="sidebarelements">
              <div>
                <div className="icon">
                  <AccountCircleIcon fontSize="small" />
                </div>
                <div className="name">Profile</div>
              </div>
            </div>
            <div
              className="sidebarelements"
              onClick={() => {
                setpage(1);
              }}
            >
              <div>
                <div className="icon">
                  <ContactPhoneIcon fontSize="small" />
                </div>
                <div className="name">Contact</div>
              </div>
            </div>
            <div
              className="sidebarelements"
              // onClick={() => {
              //   navigate("/track");
              // }}
            >
              <div>
                <div className="icon">
                  <ContactPhoneIcon fontSize="small" />
                </div>
                <Link
            href="/track"
            state={{
              // busname: Bus.filter((item) => item.id === params.id),
            }}
          >
            <Button variant="text" size="small" sx={{textDecoration:"none",marginLeft:"12px"}} className="text-white font-sans hover:text-black">
              Book Ticket
            </Button>
            {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
              Uploaded
            </Button> */}
          </Link>
              </div>
            </div>
          </div>
          <div>{/* <div className="logo">{Logo}</div> */}</div>
          <div>
            <div
              className="signout"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("user");
                navigate("/signin");
              }}
            >
              Not You? Signout
              <div className="signouticon">
                <ExitToAppIcon />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-screen float-right   ml-auto color ">
        <div className="w-[30%] h-[10%] ml-7 bg-white rounded-xl mb-3 border mt-16  flex">
          <div className="font-semibold text-2xl text-black my-auto mx-auto">Welcome Back, {currentUser?.displayName}</div>
        </div>
        <div className=" rounded-xl bg-white w-[95%] h-[70%] border m-auto relative shadow-xl">
        <div>{getStepContent(page)}</div>
        </div>
      </div>
      {/* <div className="holder color">
        <div className="dashboard bg-glass1">
          <div className="welcome ">
            Welcome Back! {currentUser?.displayName}
            <div className="details">{getStepContent(page)}</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
