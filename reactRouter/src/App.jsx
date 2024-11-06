import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Shirts from "./components/Shirts";
import Jeans from "./components/Jeans";
function App() {
  //in Route path='/' represent localhost:3000 but in vite localhost:5173 hota hai
  // and element={<Home/>} localhost per home ko call lyi
  //like localhost:3000/home
  const navigate = useNavigate();
  //navigation inside event handle
  // const navigateToAbout = () => {
  //   navigate("/about");
  // };
  const navigateTo = (url) => {
    navigate(url);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Shirts />} />
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <button onClick={() => navigate("/about")}>About</button> */}
      {/* <button onClick={() => navigate("/contact")}>Contact</button> */}
      {/* navigation using event handle
      <button onClick={() => navigateToAbout()}>About</button> 
      <button onClick={() => navigateTo("/about")}>About</button>
      <button onClick={() => navigateTo("/contact")}>contact</button>*/}
    </>
  );
}

export default App;
