import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Donate from "./Donate";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
