import { Colours } from "../theme"
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { List, Typography } from "@mui/material";
import "@fontsource/noto-serif-sc"

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
    //specifies how much of the remaining space in the flex container should be assigned to the item (flex grow factor)
    //remaining space = size of the flex container - size of all flex items' sizes together
    //if all siblings have the same flex grow factor, all items receive the same share of the remaining space otherwise it is distributed according to the ratio defined by the different flex grow factors

    fontSize: "4em", 
    //change size of header here

    fontFamily: '"noto-serif-sc",  "cursive"',
    color: Colours.secondary,
}));

export const MyList = styled (List)(({ type })=>({

    display: type === "row" ? "flex" : "block",
    //boolean expression used to determine if the display screen size is mobile or desktop size

    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center"
}));