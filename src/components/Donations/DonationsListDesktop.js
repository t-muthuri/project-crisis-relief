import { useState } from "react";
import { LooksOne, Share } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Donation, DonationActionButton, DonationAdd, DonationButton, DonationImage, DonationMeta } from "../../styles/Donations/Index";
import DonationsMetadata from "./DonationsMetadata";

function DonationsListDesktop({ donation, matches }) {

    const [displayOptions, setDisplayOptions]=useState(false);
    //set the initial state as false and when the event is carried out the state changes to true - set to true

    // add mouse hover event handler
    const handleMouseEnter = () => {
        setDisplayOptions(true);
    }

    const handleMouseLeave = () => {
        setDisplayOptions(false);
    }

  return (
    <>
    <Donation onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DonationImage src={donation.image} />
      <DonationButton isOnce={0}>
        <LooksOne />
      </DonationButton>
      {displayOptions && (<DonationAdd view={displayOptions} variant="outlined">
        Donate
        </DonationAdd>)}
      <DonationsMetadata donation={donation} matches={matches} />
      <DonationMeta view={displayOptions}>
        <Stack direction="row">
          <DonationButton isOnce={0}>
            <LooksOne />
          </DonationButton>
          <DonationActionButton>
            <Share color="primary" />
          </DonationActionButton>
        </Stack>
      </DonationMeta>
    </Donation>
    </>
     
  );
}

export default DonationsListDesktop;
