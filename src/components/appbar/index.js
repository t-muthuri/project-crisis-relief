import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Appbardesktop from "./Appbardesktop";
import Appbarmobile from "./Appbarmobile";

export default function Appbar(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <>
        {matches ? <Appbarmobile/> :<Appbardesktop/>}
        {/* define the prop */}
        </>

    );
}