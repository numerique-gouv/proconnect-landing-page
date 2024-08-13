import { tilesData, stepsInfosPublic } from '../Datas';
import './layout.css';
import HowDoesItWork from '../components/HowDoesItWork/HowDoesItWork';
import ButtonRadius from '../components/Buttons/ButtonRadius';
import whatService from '../assets/quelService.svg';

function AgentPublic() {
    return (
        <div className="fr-container" id="public">
            <HowDoesItWork tiles={tilesData} stepsInfos={stepsInfosPublic}></HowDoesItWork>
            <div className="fr-container--fluid">
                <div className="fr-container fr-py-4w fr-py-md-8w">
                    <div className="fr-grid-row fr-grid-row--gutters">
                        <div className="fr-col-12 fr-col-md-7 fr-pt-0">
                            <h1 className="fr-h3">
                                A quels services en ligne pouvez-vous vous connecter ?
                            </h1>
                            <p>
                                Grâce au bouton AgentConnect, accédez à tous les outils de la DINUM,
                                <br />à la Suite Numérique et à tous les services interministériels
                                de nos partenaires.
                            </p>
                            <a href="/services" className="blue-france fr-mb-5w">
                                Découvrez l’annuaire des services&nbsp;
                                <span
                                    className="fr-icon-arrow-right-line"
                                    aria-hidden="true"
                                ></span>
                            </a>
                        </div>
                        <div className="fr-col-4 fr-col-offset-1 fr-p-4w fr-hidden fr-unhidden-md centered-content card-radius">
                            <div className="display-column">
                                <img src={whatService} className="fr-mb-2w" alt="" />

                                <h3 className="fr-text--lead centered-text">
                                    Êtes-vous éligible <br />à AgentConnect ?
                                </h3>
                                <ButtonRadius onClick={() => console.log('coucou')}>
                                    <i className="ri-user-star-line fr-pr-1w"></i>
                                    Testez votre éligibilité
                                </ButtonRadius>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentPublic;
