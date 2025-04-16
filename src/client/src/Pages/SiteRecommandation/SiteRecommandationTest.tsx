import { WhoIsYourEmployer } from "./WhoIsYourEmployer";
import { useTitle } from "../../lib/useTitle";

function SiteRecommandationTest() {
  useTitle("Recommandation de site");

  return (
    <div className="fr-container">
      <WhoIsYourEmployer />
    </div>
  );
}
export default SiteRecommandationTest;
