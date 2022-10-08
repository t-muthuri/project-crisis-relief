import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const LandingContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_grey,
}))