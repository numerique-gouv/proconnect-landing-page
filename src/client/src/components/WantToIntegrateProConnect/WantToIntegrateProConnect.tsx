function WantToIntegrateProConnect() {
  return (
    <div className="fr-container fr-col-12 fr-col-md-8 fr-py-6w fr-py-md-2w fr-mt-4w fr-mb-8w card-radius">
      <div className="fr-container centered-content">
        <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle">
          <div>
            <p className="centered-content delete-margin-bottom bold">
              Vous voulez intégrer ProConnect sur votre site ?
            </p>
          </div>
        </div>
      </div>
      <div className="fr-container centered-text fr-my-2w">
        <a
          className="fr-btn fr-icon-mail-line fr-btn--icon-left fr-mr-2w fr-pl-5w fr-pr-5w"
          href="mailto:support+partenaires@proconnect.gouv.fr"
        >
          Nous écrire
        </a>
        <a
          className="fr-btn fr-btn--secondary fr-icon-code-s-slash-line fr-btn--icon-left fr-pl-3w fr-pr-3w"
          href="https://github.com/numerique-gouv/proconnect-documentation/blob/main/README.md"
        >
          Commencer vos tests
        </a>
      </div>
    </div>
  );
}
export default WantToIntegrateProConnect;
