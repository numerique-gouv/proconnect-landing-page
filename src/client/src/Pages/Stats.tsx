import { useTitle } from "../lib/useTitle";

function Stats() {
  useTitle("Statistiques");

  return (
    <div className="fr-container">
      <div className="fr-grid-row">
        <iframe
          className="fr-col-12"
          height="1200"
          src="https://stats.proconnect.gouv.fr/public/dashboard/8051cb4a-9e0a-49c9-81ce-3e743ba16ced"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
}
export default Stats;
