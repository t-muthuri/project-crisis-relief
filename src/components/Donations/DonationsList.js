import { LooksOne } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Donation, DonationButton, DonationImage, DonationMeta } from "../../styles/Donations/Index";
import DonationsMetadata from "./DonationsMetadata";

function DonationsList({ donation, matches }) {
  return (
    <Donation>
      <DonationImage src={donation.image} />
      <DonationsMetadata donation={donation} matches={matches} />
      <DonationMeta>
        <Stack direction="column">
          <DonationButton isOnce={1}>
            <LooksOne />
          </DonationButton>
        </Stack>
        {/* direction is based on either row or column - responsive design */}
      </DonationMeta>
    </Donation>
  );
}

export default DonationsList;

// Pseudocode
// what to build
// Donation container
// Images
// Donate actions
//Metadata on the donations
