import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Loading from "./pages/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./pages/Sign-up/AuthContext";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// import About from "./pages/about";
// import Events from "./pages/events";
// import AnnualReport from "./pages/annual";
// import Teams from "./pages/team";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import LogOrsign from "./Components/Login-Signup/LogOrsign";

const About = React.lazy(() => import("./pages/Home/about"));
const Events = React.lazy(() => import("./pages/Destinations/events"));
const AnnualReport = React.lazy(() => import("./pages/Tracking/annual"));
const Teams = React.lazy(() => import("./pages/team"));
const Blogs = React.lazy(() => import("./pages/Contact_Us/blogs"));
const SignUp = React.lazy(() => import("./pages/Sign-up/index"));
const Test = React.lazy(() => import("./pages/just.js"));
// const Homepage=React.lazy(()=>import ("./Booking/Homepage/Homepage"))
// const LogOrsign=React.lazy(()=>import ("./Booking/Login-Signup/LogOrsign"))
// const Signup=React.lazy(()=> import ("./pages/Sign-up/index"))
const VerifyEmail = React.lazy(() => import("./pages/Sign-up/VerifyEmail"));
const Profile = React.lazy(() => import("./pages/Sign-up/Profile"));
const PageNotFound = React.lazy(() => import("./pages/404/404"));
const Temp = React.lazy(() => import("./pages/tem/index"));
const Sim = React.lazy(() => import("./simulation/tem/index"));
const SeatSelection = React.lazy(() => import("./pages/Booking/seatSelection"));
const Ticket = React.lazy(() => import("./pages/Booking/ticketPage/index"));
const BusRegistration=React.lazy(()=> import("./pages/Booking/busRegistration/busRegistration"))
const Payment=React.lazy(()=>import("./pages/Payment/Form"));
const SimTest=React.lazy(()=>import("./simulation/tem/simulationTest"))
const AdminPage=React.lazy(()=>import("./pages/AdminPage/AdminPage"))
const BusEdit=React.lazy(()=>import("./pages/AdminPage/BusEdit/Busedit"))
const AdminHome=React.lazy(()=>import("./pages/AdminPage/AdminHome/AdminHome"))
const UserDetails=React.lazy(()=> import("./pages/AdminPage/Userlist/UserList"))
const AddUser=React.lazy(()=>import("./pages/AdminPage/Userlist/AddUser"))
const BusAdmin=React.lazy(()=> import("./pages/AdminPage/BusAdmin/busadmin"))
const ConductorReg=React.lazy(()=>import("./pages/AdminPage/BusConductors/conductorRegistration/ConductorRegistration"))
const ConductorSignup=React.lazy(()=>import("./pages/AdminPage/BusConductors/conductorRegistration/ConductorSignup"))
const ConductorEdit=React.lazy(()=> import("./pages/AdminPage/BusConductors/conductorRegistration/ConductorEdit"))


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        setisLoggedin(true);
        localStorage.setItem('user', JSON.stringify(currentUser));

        // console.log("from appjs"+isLoggedin)
      } else {
        setisLoggedin(false);
      }
    });
  }, [currentUser]);

  useEffect(() => {
    // localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);



  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AuthProvider
          value={{ currentUser, timeActive, setTimeActive, isLoggedin }}
        >
          <Routes>
            <Route path="/" exact element={<About />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/Home" element={<About />} />
            <Route path="/buses" element={<Events />} />
            <Route path="/track" element={<AnnualReport />} />
            <Route path="/contact" element={<Teams />} />
            <Route path="/Dev" element={<Blogs />} />
            <Route path="/help" element={<Blogs />} />
            <Route path="/test" element={<Test />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/temp" element={<Temp />} />
            <Route path="/sim" element={<Sim />} />
            <Route path="/seatselection" element={<SeatSelection />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/registration" element={<BusRegistration/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/simtest" element={<SimTest/>}/>
            <Route path="/adminbuses" element={<AdminPage/>}/>
            <Route path="/adminedit" element={<BusEdit/>}/>
            <Route path="/adminhome" element={<AdminHome/>}/>
            <Route path="/adminuser" element={<UserDetails/>}/>
            <Route path="/adminadduser" element={<AddUser/>}/>
            <Route path="/adminbus" element={<BusAdmin/>}/>
            <Route path="/admin-conductor" element={<ConductorReg/>}/>
            <Route path="/admin-conductor-registration" element={<ConductorSignup/>}/>
            <Route path="/admin-conductor-edit" element={<ConductorEdit/>}/>
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  );
}

export default App;
