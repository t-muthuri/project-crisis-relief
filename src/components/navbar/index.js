import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavbarDesktop from "./NavbarDesktop";
import NavbarPhone from "./NavbarPhone";

export default function Navbar(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <>
        {matches ? <NavbarPhone matches={matches}/> :<NavbarDesktop matches={matches}/>}
        {/* define the prop */}
        </>

    );
}