import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import { Button, IconButton } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animation/Index";

export const Donation = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const DonationImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  background: Colors.light_grey,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const DonationActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const DonationButton = styled(DonationActionButton, {
  shouldForwardProp: (prop) => prop !== "isOnce"
  // shouldForwardProp exists to prevent styling props from being passed down and create invalid attributes
  
})(
  ({ isOnce, theme }) => ({
    color: isOnce ? Colors.primary : Colors.light,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
  })
);

export const DonationAdd = styled(Button, {
  shouldForwardProp: (prop) => prop !== "view"
})(({ view, theme }) => ({
  //passing two props

  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      view &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.450, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const DonationMeta = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const DonationActions = styled(Box, {
  shouldForwardProp: (prop) => prop !== "view"
})(({ view, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: view ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation: view && `${slideInRight} 0.5s cubic-bezier(0.250, 0.450, 0.450, 0.940) both`,
  },
}));
