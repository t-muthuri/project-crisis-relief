import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LandingContainer, LandingDescription, LandingTitle, LandingContent } from "../../styles/Landing/Index";

function Landing() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LandingContainer>
      <LandingContent>
        <Typography variant="h6">
          Taking Action
        </Typography>
        <LandingTitle variant= "h2">
          COMMUNITY
        </LandingTitle>
        <LandingDescription variant="subtitle1">
          Change by the numbers makes the difference
        </LandingDescription>
      </LandingContent>
    </LandingContainer>
  )
}

export default Landing

// Pseudocode
// Landing Container
// Landing Image
//