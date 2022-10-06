import { React, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Container } from "@mui/material";

function Donate() {

     //use the useEffect hook
  useEffect(() => {
    document.title = "Home";
    return () => {};
  }, []);

  return (
    <div>
        <h1>Donate Page</h1>
    </div>
  );
}

export default Donate;

// APP CONTEXT
// // import { React, useEffect } from "react";
// import React from "react";
// // import "./App.css";
// // import { Route, Switch } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// // import Donate from "./Donate";
// import Navbar from "./Navbar";
// // import HomeIcon from "@mui/icons-material/Home";
// // import { Button, Container } from "@mui/material";

// function App() {
//   return (
//     <div>
//     <Navbar />
//     <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     </Routes>
//     {/* <Switch> */}
//     {/* <Route exact path="/">{<Home/>}</Route> */}
//     {/* <Route exact path="/about"><About/></Route>
//     <Route exact path="/donate"><Donate/></Route> */}
//     {/* </Switch> */}
//     </div>
//   );
// }

// export default App;

// // pseudocode

// //components React Tree

// //Home Page - Navigation bar/panel
// //About Page - statistics and call to action 
// //Donate Page - buttons
// //Food - items display
// //Clothes - items display
// //Shelter - items display

// //data Folder - img urls and information
