import { VolunteerActivism, Bloodtype, Person } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, Divider } from '@mui/material';
import React from 'react';
import { ActionIconsContainerDesktop, ActionIconsContainerPhone, MyList } from "../../styles/Navbar";
import { Colors } from '../../styles/theme';

function Actions({matches}) {

  const Component = matches ? ActionIconsContainerPhone : ActionIconsContainerDesktop;

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
        color: matches && Colors.secondary
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
        color: matches && Colors.secondary
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
        color: matches && Colors.secondary
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