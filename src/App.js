import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import SignInForm from "./pages/Signin";
import Loading from "./pages/Loading";

// import About from "./pages/about";
// import Events from "./pages/events";
// import AnnualReport from "./pages/annual";
// import Teams from "./pages/team";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";


const About = React.lazy(() => import("./pages/Home/about"));
const Events = React.lazy(() => import("./pages/Destinations/events"));
const AnnualReport = React.lazy(() => import("./pages/Tracking/annual"));
const Teams = React.lazy(() => import("./pages/team"));
const Blogs = React.lazy(() => import("./pages/Contact_Us/blogs"));
const SignUp = React.lazy(() => import("./pages/Sign-up"));
const Test = React.lazy(() => import("./pages/Test"));


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
          <Route path="/signin" element={<SignUp />} />
          <Route path="test" element={<Test/>}/>


        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
