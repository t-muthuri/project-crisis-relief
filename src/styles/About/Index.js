import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const AboutTitle = styled(Typography)(() => ({
    textTransform: "uppercase",
    //converting all characters to uppercase
    
    marginBottom: "1em"
}));

export const Subscribe=styled(TextField)(() =>({
    ".MuiInputLabel-root":{
    color: Colors.secondary
},
".MuiInput-root::before":{
    borderBottom: `1px solid ${Colors.secondary}`
}
}));