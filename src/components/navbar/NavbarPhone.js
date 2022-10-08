import { Search, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import Actions from "./Actions";

function NavbarPhone({matches}) {
  return (
    <NavbarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <NavbarHeader>
        CRISIS RELIEF
      </NavbarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </NavbarContainer>
  )
};

export default NavbarPhone;