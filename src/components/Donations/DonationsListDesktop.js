import { useState } from "react";
import { LooksOne, Share } from "@mui/icons-material";
import { Stack } from "@mui/system";
import {
  Donation,
  DonationActionButton,
  DonationActions,
  DonationAdd,
  DonationButton,
  DonationImage,
} from "../../styles/Donations/Index";
import DonationsMetadata from "./DonationsMetadata";

function DonationsListDesktop({ donation, matches }) {
  const [displayOptions, setDisplayOptions] = useState(false);
  //set the initial state as false and when the event is carried out the state changes to true - set to true

  // add mouse hover event handler
  const handleMouseEnter = () => {
    setDisplayOptions(true);
  };

  const handleMouseLeave = () => {
    setDisplayOptions(false);
  };

  return (
    <>
      <Donation onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DonationImage src={donation.image} />
        <DonationButton isOnce={0}>
          <LooksOne />
        </DonationButton>

        {displayOptions && (
          <DonationAdd view={displayOptions} variant="outlined">
            Donate
          </DonationAdd>
        )}
        <DonationActions view={displayOptions}>
          <Stack direction="column">
            <DonationActionButton>
              <Share color="primary" />
            </DonationActionButton>
          </Stack>
        </DonationActions>
      </Donation>
      <DonationsMetadata donation={donation} matches={matches} />
    </>
  );
}

export default DonationsListDesktop;
