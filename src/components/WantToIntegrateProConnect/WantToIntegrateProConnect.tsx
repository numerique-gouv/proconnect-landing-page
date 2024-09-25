import Button from "@codegouvfr/react-dsfr/Button";

function WantToIntegrateProConnect() {
  return (
    <div className="fr-container fr-col-12 fr-col-md-8 fr-py-6w fr-py-md-2w fr-mt-4w fr-mb-8w card-radius">
      <div className="fr-container centered-content">
        <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle">
          <div>
            <p className="centered-content delete-margin-bottom bold">
              Vous voulez intégrer ProConnect sur votre site ?
            </p>
          </div>
        </div>
      </div>
      <div className="fr-container centered-text fr-my-2w">
        <a
          className="fr-raw-link "
          href="mailto:support.partenaires@agentconnect.gouv.fr"
        >
          <Button
            className="fr-mr-2w fr-pl-5w fr-pr-5w"
            iconId="fr-icon-mail-line"
          >
            Nous écrire
          </Button>
        </a>
        <a
          className="fr-raw-link"
          href="https://github.com/numerique-gouv/agentconnect-documentation/blob/main/README.md#-agentconnect---documentation"
        >
          <Button
            priority="secondary"
            iconId="fr-icon-code-s-slash-line"
            className="fr-pl-3w fr-pr-3w"
          >
            Commencer vos tests
          </Button>
        </a>
      </div>
    </div>
  );
}
export default WantToIntegrateProConnect;
