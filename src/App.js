import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Brothers from "./components/pages/brothers";
import Rush from "./components/pages/rush";
import Gallery from "./components/pages/gallery";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router className="router">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brothers" element={<Brothers />} />
        <Route path="/rush" element={<Rush />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
