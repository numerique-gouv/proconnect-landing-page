import { Badge } from '@codegouvfr/react-dsfr/Badge';

function Partners() {
    return (
        <div className="fr-container fr-mt-2w">
            <h1>Liste des administrations partenaires</h1>
            <div className="fr-table fr-pt-0" style={{ verticalAlign: 'top' }}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Structure</th>
                            <th scope="col">Domaine email autorisé</th>
                            <th scope="col">Fournisseur d'identité</th>
                            <th scope="col">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Centre d'études et d'expertise sur les risques, l'environnement, la
                                mobilité et l'aménagement
                            </td>
                            <td>
                                <i>*@cerema.fr</i>
                            </td>
                            <td>CEREMA</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Institut national de recherche pour l'agriculture, l'alimentation et
                                l'environnement
                            </td>
                            <td>
                                <i>*@inrae.fr</i>
                            </td>
                            <td>INRAE</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Commissariat à l'énergie atomique et aux énergies alternatives</td>
                            <td>
                                <i>*@cea.fr, *@cte.gouv.fr, *@ddcg.fr, *@dsnd.fr</i>
                            </td>
                            <td>Commissariat à l'Énergie Atomique (CEA)</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ministère de l'Économie, des Finances et de la Souveraineté
                                industrielle et numérique (MEFSIN)
                            </td>

                            <td>
                                <i>
                                    *@finances.gouv.fr, *@afa.gouv.fr, *@igf.finances.gouv.fr,
                                    *@ape.finances.gouv.fr, *@transformation.gouv.fr,
                                    *@cabinets.finances.gouv.fr, *@cabinet.finances.gouv.fr,
                                    *@syndicats.finances.gouv.fr, *@ofgl.fr,
                                    *@territoires-industrie.gouv.fr, *@numerique.gouv.fr,
                                    *@industrie.gouv.fr, *@autoritedelaconcurrence.fr,
                                    *@modernisation.gouv.fr, *@anc.gouv.fr, *@cades.fr,
                                    *@sgae.gouv.fr, *@ape.gouv.fr
                                </i>
                            </td>
                            <td>
                                <ul className="fr-mt-0">
                                    <li>
                                        Administration centrale
                                        <a
                                            className="fr-text--xs"
                                            href="https://agentconnect.gouv.fr/liste-entites-administration-centrale.pdf"
                                        >
                                            (&nbsp;Agents de l'Administration Centrale du MEFSIN
                                            concernés&nbsp;-&nbsp;PDF&nbsp;611&nbsp;ko&nbsp;)
                                        </a>
                                        <span
                                            className="fr-icon-file-download-line"
                                            aria-hidden="true"
                                        ></span>
                                    </li>
                                    <li>
                                        Direction générale des Douanes et Droits indirects (DGDDI)
                                    </li>
                                    <li>Direction générale des Finances publiques (DGFIP)</li>
                                    <li>
                                        Institut National de la Statistique et des Études
                                        Économiques (INSEE)
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de la Transition Écologique / Énergétique</td>
                            <td>
                                <i>*@developpement-durable.gouv.fr</i>
                            </td>
                            <td>Cerbère</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de l'Intérieur - Gendarmerie Nationale</td>
                            <td>
                                <i>*@gendarmerie.interieur.gouv.fr </i>
                            </td>
                            <td>Curasso</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Institut National de la Statistique et des Etudes Economiques
                                (INSEE)
                            </td>
                            <td>
                                <i>*@insee.fr </i>
                            </td>
                            <td>INSEE</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Direction Générale des Douanes et Droits Indirects (DGDDI)</td>
                            <td>
                                <i>*@douane.finances.gouv.fr </i>
                            </td>
                            <td>DGDDI</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Direction Générale des Finances Publiques (DGFIP)</td>
                            <td>
                                <i>*@dgfip.finances.gouv.fr</i>
                            </td>
                            <td>FIDGFiP</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de l'Intérieur</td>
                            <td>
                                <i>*@interieur.gouv.fr</i>
                            </td>
                            <td>Passage2</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de l'Europe et des Affaires étrangères</td>
                            <td>
                                <i>*@diplomatie.gouv.fr</i>
                            </td>
                            <td>AROBAS</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de la Justice (en cours d'intégration)</td>
                            <td>
                                <i>*@justice.gouv.fr</i>
                            </td>
                            <td>Ministère de la Justice</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de la Culture (en cours d'intégration)</td>
                            <td>
                                <i>*@culture.gouv.fr</i>
                            </td>
                            <td>SSO Ministère de la Culture</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Partners;
