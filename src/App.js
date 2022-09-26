import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
// import About from "./pages/about";
// import Events from "./pages/events";
// import AnnualReport from "./pages/annual";
// import Teams from "./pages/team";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";

const About = React.lazy(() => import("./pages/about"));
const Events = React.lazy(() => import("./pages/events"));
const AnnualReport = React.lazy(() => import("./pages/annual"));
const Teams = React.lazy(() => import("./pages/team"));
const Blogs = React.lazy(() => import("./pages/blogs"));
const SignUp = React.lazy(() => import("./pages/signup"));

function App() {
  return (
    <Router>
      {/* <div className="border"> */}
      <Navbar />
      {/* </div> */}
      <Suspense fallback={<div style={{backgroundColor:'red'}}>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" element={<About />} />
          <Route path="/buses" element={<Events />} />
          <Route path="/track" element={<AnnualReport />} />
          <Route path="/contact" element={<Teams />} />
          <Route path="/Dev" element={<Blogs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
