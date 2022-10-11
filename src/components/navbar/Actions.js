import { VolunteerActivism, Bloodtype, Person, Home } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, Divider } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerPhone,
  MyList,
} from "../../styles/Navbar";
import { Colors } from "../../styles/theme";

function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerPhone
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
      <NavLink to="/">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Home />
          </ListItemIcon>
        </ListItemButton>
        </NavLink>
        <Divider orientation="vertical" flexItem />
        <NavLink to="/volunteer">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <VolunteerActivism />
          </ListItemIcon>
        </ListItemButton>
        </NavLink>
        <Divider orientation="vertical" flexItem />

        {/* optional element
      usually the divider is horizontal */}

<NavLink to="/donate">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Bloodtype />
          </ListItemIcon>
        </ListItemButton>
        </NavLink>
        <Divider orientation="vertical" flexItem />
        <NavLink to="/about">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Person />
          </ListItemIcon>
        </ListItemButton>
        </NavLink>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}

export default Actions;
