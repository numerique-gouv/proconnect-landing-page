import Button from "@codegouvfr/react-dsfr/Button";
import Lottie from "react-lottie";
import eligibleAnimation from "../../assets/Success.json";
import WantToIntegrateProConnect from "../../components/WantToIntegrateProConnect/WantToIntegrateProConnect";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: eligibleAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Result(props: { subtitle: string }) {
  return (
    <div className="fr-container">
      <div className="container fr-my-8w">
        <div className="fr-container fr-py-3w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h2">
                Bonne nouvelle, vous êtes éligible&nbsp;!
              </h1>
              <p>{props.subtitle}</p>
              <a className="fr-raw-link fr-btn" href="/services">
                Explorer l'annuaire des sites
              </a>
            </div>
          </div>
        </div>
      </div>
      <WantToIntegrateProConnect />
    </div>
  );
}

export default Result;
