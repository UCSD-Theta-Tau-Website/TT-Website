import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Brothers from "./components/pages/brothers";
import Rush from "./components/pages/rush";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brothers" element={<Brothers />} />
        <Route path="/rush" element={<Rush />} />
      </Routes>
    </Router>
  );
}

export default App;
