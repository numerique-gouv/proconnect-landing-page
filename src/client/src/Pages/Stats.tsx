import { useTitle } from "../lib/useTitle";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";

function Stats() {
  useTitle("Statistiques");
  const { isDark } = useIsDark();

  const metabaseTheme = isDark ? "#theme=night" : "";
  const url = `https://stats.proconnect.gouv.fr/public/dashboard/8051cb4a-9e0a-49c9-81ce-3e743ba16ced${metabaseTheme}`;
  return (
    <div className="fr-container">
      <div className="fr-grid-row">
        <h1>Tableau de bord des statistiques ProConnect</h1>
        <iframe
          className="fr-col-12"
          height="1200"
          src={url}
          width="100%"
          title="Tableau de bord des statistiques ProConnect"
        ></iframe>
      </div>
    </div>
  );
}
export default Stats;
