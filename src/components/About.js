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
        <Container
      // add some styling using the M-UI library

      maxWidth="xl"
      sx={{ background: "#fff" }}
    >
      <Button
        variant="outlined"
        onClick={() => {
          alert("clicked");
        }}
        size="large"
        startIcon={<HomeIcon />}
      >
        {" "}
        About{" "}
      </Button>
    </Container>
    </div>
  );
}

export default About;