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
    [theme.breakpoints.down("sm")]:{
        flexDirection: "column",
        //sets how flex items are placed in a flex container defining the main axis and the direction
        //column - the flex container's main axis is the same as the block-axis

        alignItems: "center"
    }
}))

export const LandingContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    //sets the maximum width of an element
    //overrrides the used value and the width properties. prevents them from becoming larger than the value specified.

    padding: "30px"
}))