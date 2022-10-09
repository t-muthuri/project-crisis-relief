import { Typography } from "@mui/material";
import React from "react";
import { DonationMeta } from "../../styles/Donations/Index";

function DonationsMetadata({ donation, matches }) {
  return (
    <DonationMeta>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {donation.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        Ksh.{donation.price}
      </Typography>
    </DonationMeta>
  );
}

export default DonationsMetadata;
