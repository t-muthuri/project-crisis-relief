import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { donations } from "../../data/donations";
import DonationsList from "./DonationsList";

function Donations() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderDonations = donations.map((donation) => (
    <Grid
      item
      key={donation.id}
      //breakpoints in mui that can be used to display in a grid format
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <DonationsList donation={donation} matches={matches} />
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{xs: 2, md: 3}}
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px " }}
        columns = {{xs:4, sm:8, md:12}}
      >
        {renderDonations}
      </Grid>
    </Container>
  );
}

export default Donations;
