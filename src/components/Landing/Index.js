import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LandingContainer } from "../../styles/Landing/Index";

function Landing() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LandingContainer>
      <h1>LAnding</h1>
    </LandingContainer>
  )
}

export default Landing

// Pseudocode
// Landing Container
// Landing Image
//