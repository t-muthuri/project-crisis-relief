import { createTheme } from "@mui/material/styles"

export const Colors = {
    primary: "#43241a",
    secondary: "#93806e",
    success: "#4caf50",
    info:"#00a2ff",
    danger:"#ff5722",
    warning:"#ffc107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#dddfe1",
    inverse:"#2f3d4a",
    shaft:"#333",
    //GREYS
    dim_grey:"#696969",
    dove_grey:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_grey:"#rgb(230,230,230)",
    //SOLID COLOUR
    white:"#fff",
    black:"#000",
};

const theme = createTheme({

    palette:
    {
        primary:{
        main: Colors.primary
    },
    secondary:{
        main: Colors.secondary
    }
    },

    //target the components
MuiButton: {
    defaultProps:{
      disableRipple: true,
      disableElevation: true
    }
  }

});

export default theme;