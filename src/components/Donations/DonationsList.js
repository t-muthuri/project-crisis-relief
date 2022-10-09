import { Donation, DonationImage } from "../../styles/Donations/Index";
import DonationsMetadata from "./DonationsMetadata";

function DonationsList({ donation, matches }) {
  return (
    <Donation>
      <DonationImage src={donation.image} />
      <DonationsMetadata donation={donation} matches={matches} />
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
