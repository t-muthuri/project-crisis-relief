import { Box, styled } from "@mui/system";
import theme, { Colors } from "../theme";
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

export const DonationButton = styled(DonationActionButton)(
  ({ isButton, theme }) => ({
    color: isButton ? Colors.primary : Colors.light,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
  })
);

export const DonationAdd = styled(Button)(({ display, time }) => ({
  //passing two props

  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      display &&
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

export const DonationActions = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation: show && `${slideInRight}`,
  },
}));
