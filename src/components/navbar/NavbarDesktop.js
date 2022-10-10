import SearchIcon from "@mui/icons-material/Search";
import { ListItemText, ListItemButton } from "@mui/material";
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
        <ListItemText primary="Home" />
        </NavLink>
        <NavLink to="/volunteer">
        <ListItemText primary="Volunteer" />
        </NavLink>
        <NavLink to="/donate">
        <ListItemText primary="Donate" />
        </NavLink>
        <NavLink to = "/about">
        <ListItemText primary="About" />
        </NavLink>
        <ListItemButton>
          <SearchIcon />
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </NavbarContainer>
  );
}

export default NavbarDesktop;
