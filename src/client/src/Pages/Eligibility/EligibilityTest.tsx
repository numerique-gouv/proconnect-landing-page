import { useEffect } from "react";
import "./eligibility.css";

import { WhoIsYourBoss } from "./WhoIsYourBoss";

function EligibilityTest() {
  useEffect(() => {
    document.title = "Testez votre éligibilité - ProConnect";
  }, []);
  return (
    <div className="fr-container" id="componentStart">
      <WhoIsYourBoss />
    </div>
  );
}
export default EligibilityTest;
