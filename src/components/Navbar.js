import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Container } from "@mui/material";

function NavBar() {
  useEffect(() => {
    document.title = "Home";
    return () => {};
  }, []);

  return (
    <div className="navbar">
      <NavLink to="/">
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
            Home{" "}
          </Button>
        </Container>
      </NavLink>
      <NavLink to="/about">
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
      </NavLink>
      <NavLink to="/donate">
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
            Donate{" "}
          </Button>
        </Container>
      </NavLink>
    </div>
  );
}

export default NavBar;
