import SearchIcon from "@mui/icons-material/Search";
import { ListItemText, ListItemButton } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/Appbar";

function Appbardesktop({matches}) { //pass down the props from the parent component
  return (
    <>
    <AppbarContainer />
    <AppbarHeader>CRISIS RELIEF</AppbarHeader>
    <MyList type = "row">
      {/* using material-ui components to display my pages */}
      <ListItemText primary = "Home" />
      <ListItemText primary = "Volunteer" />
      <ListItemText primary = "Donate" />
      <ListItemText primary = "Signup" />
      <ListItemButton>
        <SearchIcon />
      </ListItemButton>
    </MyList>
    </>
  )
};

export default Appbardesktop;