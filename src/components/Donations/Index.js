import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { donations } from "../../data/donations";


function Donations() {

    const theme = useTheme();
    const matches =
    useMediaQuery(theme.breakpoints.down("md"));

    const renderDonations = donations.map(donation => (
      <Grid item key={donation.id} display="flex" flexDirection={"column"} alignItems="center">

      </Grid>
    ))

  return (
    <Container>
      <Grid
      container
      justifyContent={"center"}
      sx={{ margin: '20px 4px 10px 4px '}}>
        {renderDonations}
      </Grid>
    </Container>
  );
}

export default Donations
