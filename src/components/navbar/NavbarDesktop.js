import SearchIcon from "@mui/icons-material/Search";
import { ListItemText, ListItemButton } from "@mui/material";
import { NavbarContainer, NavbarHeader, MyList } from "../../styles/Navbar";
import Actions from "./Actions";

function NavbarDesktop({ matches }) {
  //pass down the props from the parent component

  return (
    <NavbarContainer>
      <NavbarHeader>CRISIS RELIEF</NavbarHeader>
      <MyList type="row">
        {/* using material-ui components to display my pages */}
        <ListItemText primary="Home" />
        <ListItemText primary="Volunteer" />
        <ListItemText primary="Donate" />
        <ListItemText primary="Signup" />
        <ListItemButton>
          <SearchIcon />
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </NavbarContainer>
  );
}

export default NavbarDesktop;
