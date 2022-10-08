import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const StatisticsContainer = styled(Box)(({theme}) => ({

    [theme.breakpoints.up("md")]: {
        padding: "40px 0px 40px 0px"
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    //sets an element's overflow - when its content is too big to fit in its block formatting context - in bot directions
    //hidden- clipped to fit the padding box. Prevents the scrollbars from being generated.

    background: Colors.secondary
}))

export const StatisticsText = styled(Typography)(({theme}) => ({

    fontFamily: '"noto-serif-sc", "cursive"',
    [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
    },
    color: Colors.white,
    fontSize: "1.5rem",
}))