import { React, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Container } from "@mui/material";

function About() {

    useEffect(() => {
        document.title = "Home";
        return () => {};
      }, []);

  return (
    <div>
        <h1>About Page</h1>
    </div>
  );
}

export default About;