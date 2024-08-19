import notEligible from "../../assets/notEligible.svg";

export function NotEligible() {
  return (
    <div className="fr-container">
      <div className="container fr-my-8w">
        <div className="fr-container fr-py-3w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img src={notEligible} alt="" />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h2">Vous n'êtes pas éligible.</h1>
              <p>
                AgentConnect est réservé aux agents publics. Les associations et
                entreprises privées ne peuvent pas l'utiliser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
