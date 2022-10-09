import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import { IconButton } from "@mui/material"; 

export const Donation = styled(Box)(({theme})=> ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        position: "relative"
    }
}));

export const DonationImage = styled ("img")(({ src, theme}) => ({

    src: `url(${src})`,
    width: "100%",
    background: Colors.light_grey,
    padding: "10px",
    [theme.breakpoints.down("md")]: {
        width: "80%",
        padding: "24px",
    }
}));

export const DonationActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const DonationButton = styled(DonationActionButton)(({isButton, theme}) => ({
    color: isButton ? Colors.primary : Colors.light,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 0,
        top: 0,
    },
}));