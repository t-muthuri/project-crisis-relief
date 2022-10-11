import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Navbar from "./navbar";
import { Container } from "@mui/material";
import Landing from "./Landing/Index";
import Statistics from "./statistics";
import Donations from "./Donations/Index";
import About from "./About/Index";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Navbar />
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/about" element={<About />} />
          </Routes>
          <Statistics />
          {/* Statistics component is in every page to give information on the crisis */}

        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

// pseudocode

//components React Tree

//Home Page - Navigation bar/panel
//About Page - statistics and call to action
//Donate Page - buttons
//Food - items display
//Clothes - items display
//Shelter - items display

//data Folder - img urls and information