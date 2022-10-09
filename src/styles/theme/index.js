import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#43241a",
  secondary: "#794",
  //green in behavioral analysis:
  //renewal and life
  //makes people feel secure
  //encourages a balance that leads to decisiveness
  //in this app green is used to call the visitors and users of the app to action
  //since the climate change crisis has been the lead cause of adverse weather i.e., leading to prolonged droughts, green here symbolizes a new era.
  //an era of being sensitive to our environment and being one with Nature.

  success: "#4caf50",
  info: "#00a2ff",
  danger: "#ff5722",
  warning: "#ffc107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#dddfe1",
  inverse: "#2f3d4a",
  shaft: "#333",
  //GREYS
  dim_grey: "#696969",
  dove_grey: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_grey: "#rgb(230,230,230)",
  //SOLID COLOUR
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  //target the components
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
  },
});

export default theme;
