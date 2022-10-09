import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


function Donations() {

    const theme = useTheme();
    const matches =
    useMediaQuery(theme.breakpoints.down("md"));

    const renderDonations = donations

  return (
    <h1>Donations</h1>
  );
}

export default Donations
