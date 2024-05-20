import React from "react"
import "./roadmap.css"

function Roadmap(){
    return(
        <React.Fragment>
            <div className="fr-container fr-my-5w">
            <h1>Feuille de route</h1>
                <div className="fr-grid-row fr-grid-row--gutters">
                    <div className="fr-col-12">
                        <nav className="navmenu fr-col-12">
                            <ul>
                                <li>
                                    <div className="bubble fr-py-5v">
                                        <h2 className="fr-h6 fr-mb-1w">Deuxième semestre 2023</h2>
                                        <p className="fr-mb-0">
                                            • Fusion avec MonComptePro : tous les agents de la fonction
                                            publique peuvent se connecter à AgentConnect.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Parcours utilisateur amélioré avec la connexion par
                                            adresse email.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="bubble">
                                        <h2 className="fr-h6 fr-mb-1w">Trimestre précédent (T1 2024)</h2>
                                        <p className="fr-mb-0">
                                            • Migration de l'infrastructure cloud de MonComptePro.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Outillage interne : nouvelle interface de modération.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Nouveau fournisseur de service :
                                            <a href="https://annuaire-entreprises.data.gouv.fr/"
                                            >Annuaire des entreprises</a>.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Premier fournisseur de service à destination du secteur
                                            privé :
                                            <a href="https://egapro.travail.gouv.fr/">Egapro</a>.
                                        </p>
                                        <p className="fr-mb-0">
                                            • la DGCCRF a rejoint la fédération d'identité
                                        </p>
                                    </div>
                                </li>
                                <li className="active">
                                    <div className="bubble">
                                        <h2 className="fr-h6 fr-mb-1w">Trimestre en cours (T2 2024)</h2>
                                        <p className="fr-mb-0">
                                            • Migration de l'infrastructure cloud d'AgentConnect.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Compatibilité PKCE
                                        </p>
                                        <p className="fr-mb-0">
                                            • France Travail rejoint la fédération d'identité.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Le ministère des Affaires sociales rejoint la fédération
                                            d'identité.
                                        </p>
                                        <p className="fr-mb-0">
                                            • AgentConnect est disponible pour les professionels du secteur privé et devient
                                            ProConnect.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Refonte graphique
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="bubble">
                                        <h2 className="fr-h6 fr-mb-1w">Semestre prochain (S2 2024)</h2>
                                        <p className="fr-mb-0">• Authentification multifacteur.</p>
                                        <p className="fr-mb-0">
                                            • Mise en ligne d'un outil de gestion des groupes de
                                            travail permettant de gérer les habilitations.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Le ministère de l'Éducation nationale, de la Jeunesse, des
                                            Sports et des Jeux Olympiques et Paralympiques rejoint la
                                            fédération d'identité.
                                        </p>
                                        <p className="fr-mb-0">
                                            • Nouveau fournisseur de service :&nbsp;
                                            <a href="https://www.tchap.gouv.fr/">Tchap</a>.
                                        </p>
                                        <p className="fr-mb-0">
                                            • InclusionConnect fusionne avec AgentConnect.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="bubble">
                                        <h2 className="fr-h6 fr-mb-1w">En 2025</h2>
                                        <p className="fr-mb-0">
                                            • AgentConnect suit une personne tout au long de sa
                                            carrière.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Roadmap
