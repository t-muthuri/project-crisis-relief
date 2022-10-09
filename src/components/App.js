import React from "react";
//import { Routes, Route } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Donate from "./Donate";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Navbar from "./navbar";
import { Box, Container, Typography } from "@mui/material";
import Landing from "./Landing/Index";
import Statistics from "./statistics";
import Donations from "./Donations/Index";

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
          <Landing />
          <Statistics />
          <Box display="flex" justifyContent={"center"} sx={{ p:4 }}>
            <Typography variant = "h4"> Food Donations </Typography>
          </Box>
          <Donations />
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
