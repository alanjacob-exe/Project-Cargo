import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <div className="border">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" element={<About />} />
        <Route path="/buses" element={<Events />} />
        <Route path="/track" element={<AnnualReport />} />
        <Route path="/contact" element={<Teams />} />
        <Route path="/Dev" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
