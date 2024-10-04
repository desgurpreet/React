import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  //in Route path='/' represent localhost:3000 but in vite localhost:5173 hota hai
  // and element={<Home/>} localhost per home ko call lyi
  //like localhost:3000/home
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <button onClick={() => navigate("/about")}>About</button> */}
      {/* <button onClick={() => navigate("/contact")}>Contact</button> */}
      <button onClick={() => navigateToAbout()}>About</button>
    </>
  );
}

export default App;
