import { LooksOne, Share } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Donation, DonationActionButton, DonationAdd, DonationButton, DonationImage, DonationMeta } from "../../styles/Donations/Index";
import DonationsMetadata from "./DonationsMetadata";

function DonationsList({ donation, matches }) {
  return (
    <>
    <Donation>
      <DonationImage src={donation.image} />
      <DonationsMetadata donation={donation} matches={matches} />
      <DonationMeta>
        <Stack direction="row">
          <DonationButton isOnce={0}>
            <LooksOne />
          </DonationButton>
          <DonationActionButton>
            <Share color="primary" />
          </DonationActionButton>
        </Stack>
        {/* direction is based on either row or column - responsive design */}
      </DonationMeta>
    </Donation>
    <DonationAdd variant="contained">Donate</DonationAdd>
    </>
     
  );
}

export default DonationsList;

// Pseudocode
// what to build
// Donation container
// Images
// Donate actions
//Metadata on the donations
