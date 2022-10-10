import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  LandingContainer,
  LandingDescription,
  LandingTitle,
  LandingContent,
  LandingImage,
} from "../../styles/Landing/Index";

function Landing() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LandingContainer>
      <LandingImage src="https://thumbs.dreamstime.com/b/volunteer-giving-food-helping-poor-hungry-people-homeless-men-refugees-person-sharing-serving-meal-as-donation-volunteer-243902495.jpg" />
      <LandingContent>
        <Typography variant="h6">Taking Action</Typography>
        <LandingTitle variant="h2">COMMUNITY</LandingTitle>
        <LandingDescription variant="subtitle1">
          Change by the numbers makes the difference
        </LandingDescription>
      </LandingContent>
    </LandingContainer>
  );
}

export default Landing;

// Pseudocode
// Landing Container
// Landing Image
// Routing
