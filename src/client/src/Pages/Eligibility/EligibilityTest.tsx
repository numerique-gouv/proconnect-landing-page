import "./eligibility.css";

import { WhoIsYourBoss } from "./WhoIsYourBoss";
import { useTitle } from "../../lib/useTitle";

function EligibilityTest() {
  useTitle("Testez votre éligibilité");

  return (
    <div className="fr-container" id="componentStart">
      <WhoIsYourBoss />
    </div>
  );
}
export default EligibilityTest;
