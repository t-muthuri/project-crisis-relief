import {Colours} from "../theme"
import {styled} from "@mui/material/styles";
import {Box, display} from "@mui/system";
import { Typography } from "@mui/material";
import "@fontsource/montez"

//container
export const AppbarContainer = styled(Box)(()=>({
    display:"flex", 
    //creating a flex container
    //default property is the items display in a row, start from the edge of the main axis, do not stretch but can shrink, will stretch to fill the size of the cross axis, flex-basics is set to auto and the flex-wrap is set to nowrap.

    marginTop: 4, 
    //sets the margin area on top of an element. 
    //the positive value "4" places it farther from its neighbours.

    justifyContent: "center",
    //how the browser distributes space between and around content items along the main-axis of a flex container and the inline axis of a grid container.
    //alignment done after the lengths and auto argins are applied.
    //center - items are packed flush to each other toward the center of the alignments container along the main axis.

    alignItems: "center",
    //sets the align-self value on all direct children as a group
    //controls the alignment items on the Cross Axis in Flexbox
    //center - flex items' margin boxes are centered within the line on the cross-axis.

    padding: "2px 8px",
    //all four sides set at once - this property is a shorthand
    //1 value = apply to all four sides, 2 values = vertical & horizontal, 3 values = top, horizontal & bottom, 4 values = top, right, bottom & left
    //an element's padding area is the space between its content and its border

}));

//header
export const AppbarHeader = styled(Typography)(()=>({ //Typography is for titles
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"montez",  "cursive"',
    color: Colours.secondary,
}))