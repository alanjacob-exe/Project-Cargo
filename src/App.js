import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import SignInForm from "./pages/Signin";
import Loading from "./pages/Loading";
import 'bootstrap/dist/css/bootstrap.min.css'


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
const Test = React.lazy(() => import("./pages/just"));
// const Homepage=React.lazy(()=>import ("./Booking/Homepage/Homepage"))
// const LogOrsign=React.lazy(()=>import ("./Booking/Login-Signup/LogOrsign"))
// const Signup=React.lazy(()=> import ("./pages/Sign-up/index"))
const VerifyEmail=React.lazy(()=> import("./pages/Sign-up/VerifyEmail"))


function App() {
  return (
    <Router>
      {/* <div className="border"> */}
      {/* </div> */}
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" exact element={<About />}/>
          <Route path="/Home" element={<About />} />
          <Route path="/buses" element={<Events />} />
          <Route path="/track" element={<AnnualReport />} />
          <Route path="/contact" element={<Teams />} />
          <Route path="/Dev" element={<Blogs />} />
          <Route path="/help" element={<Blogs/>} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/signin" element={<SignUp/>}/>
          <Route path="/verify-email" element={<VerifyEmail/>}/>
       




        </Routes>
      </Suspense>
     




        
    </Router>
  );
}

export default App;
