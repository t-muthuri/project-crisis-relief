// import { Info, InvertColorsRounded, LightModeOutlined } from "@mui/icons-material";
// import { light } from "@mui/material/styles/createPalette";
// import { border } from "@mui/system";
// import { warning } from "@remix-run/router";
// import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles"

export const Colours = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",
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
        main: Colours.primary
    },
    secondary:{
        main: Colours.secondary
    }
    }

});

export default theme;