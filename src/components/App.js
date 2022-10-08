import React from "react";
//import { Routes, Route } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Donate from "./Donate";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Navbar from "./navbar";
import { Container } from "@mui/material"
import Landing from "./Landing/Index";
import Statistics from "./statistics";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container 
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}>
          <Navbar/>
          <Landing />
          <Statistics />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes> */}
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
