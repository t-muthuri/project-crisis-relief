import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Appbar(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <>
        {matches ? <h1>MOBILE</h1> : <h1>DESKTOP</h1>}
        </>

    );
}