import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme, { Colors } from "../theme";

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
}));

export const LandingTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    //sets the height of a line box.
    //vertical line spacing-sets the distance between lines of text.
    //unitless number - used value * by the element's fontSize

    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]:{
        // defining the size of the title if it is a phone screen
        fontSize: "42px"
    }
}));

export const LandingDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em"
    }
}));