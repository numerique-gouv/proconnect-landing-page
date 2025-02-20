import { useTitle } from "../lib/useTitle";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

function Stats() {
  useTitle("Statistiques");

  return (
    <div className="fr-container fr-mt-9w">
      <CallOut iconId="ri-information-line" title="Statistiques ProConnect">
        Les statistiques sont momentanément indisponibles. Nous nous excusons
        pour la gêne occasionnée.
      </CallOut>
    </div>
  );
}
export default Stats;
