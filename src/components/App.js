import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home";
import About from "./About"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;