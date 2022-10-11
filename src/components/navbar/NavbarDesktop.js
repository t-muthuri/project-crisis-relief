import { Bloodtype, Home, Info, VolunteerActivism } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemText, ListItemButton, Container, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NavbarContainer, NavbarHeader, MyList } from "../../styles/Navbar";
import Actions from "./Actions";

function NavbarDesktop({ matches }) {
  //pass down the props from the parent component

  return (
    <NavbarContainer>
      <NavbarHeader>CRISIS RELIEF</NavbarHeader>
      <MyList type="row">
        {/* using material-ui components to display my pages */}
        <NavLink to="/">
          <Container
            // add some styling using the M-UI library

            maxWidth="xl"
            sx={{ background: "#fff" }}
          >
            <Button
              variant="outlined"
              // onClick={() => {
              //   alert("clicked");
              // }}
              size="small"
              startIcon={<Home />}
            >
              <ListItemText primary="Home" />
            </Button>
          </Container>
        </NavLink>
        <NavLink to="/volunteer">
          <Container maxWidth="xl" sx={{ background: "#fff" }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<VolunteerActivism />}
            >
              <ListItemText primary="Volunteer" />
            </Button>
          </Container>
        </NavLink>
        <NavLink to="/donate">
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Bloodtype />}
            >
          <ListItemText primary="Donate" />
          </Button>
          </Container>
        </NavLink>
        <NavLink to="/about">
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Info />}
            >
          <ListItemText primary="About" />
          </Button>
          </Container>
        </NavLink>
        <ListItemButton>
          <SearchIcon />
        </ListItemButton>
      </MyList>
      {/* <Actions matches={matches} /> */}
    </NavbarContainer>
  );
}

export default NavbarDesktop;
