import { VolunteerActivism, Bloodtype, Person } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, Divider } from '@mui/material';
import React from 'react';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/Appbar";

function Actions({matches}) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  return (
    <Component>
    <MyList type = "row">
      <ListItemButton
      sx={{
        justifyContent: "center",
      }}>
      <ListItemIcon
      sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <VolunteerActivism/>
      </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />

      {/* optional element
      usually the divider is horizontal */}

      <ListItemButton
      sx={{
        justifyContent: "center",
      }}>
      <ListItemIcon
      sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Bloodtype/>
      </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
      sx={{
        justifyContent: "center",
      }}>
      <ListItemIcon
      sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Person/>
      </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </MyList>
    </Component>
  )
}

export default Actions;