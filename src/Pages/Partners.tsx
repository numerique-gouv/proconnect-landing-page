import { Badge } from '@codegouvfr/react-dsfr/Badge';
import './layout.css';

function Partners() {
    return (
        <div className="fr-container fr-mt-2w">
            <h1 className="fr-h3">Liste des administrations partenaires</h1>
            <div className="fr-table fr-pt-0" style={{ verticalAlign: 'top' }}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Structure</th>
                            <th scope="col">Fournisseur d'identité</th>
                            <th scope="col">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Institut national de recherche pour l'agriculture, l'alimentation et
                                l'environnement
                            </td>
                            <td>INRAE</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Commissariat à l'énergie atomique et aux énergies alternatives</td>
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
                                <ul className="fr-mt-0">
                                    <li>
                                        Administration centrale&nbsp;
                                        <a
                                            className="fr-text--xs"
                                            href="https://agentconnect.gouv.fr/liste-entites-administration-centrale.pdf"
                                        >
                                            (&nbsp;Agents de l'Administration Centrale du MEFSIN
                                            concernés&nbsp;-&nbsp;PDF&nbsp;611&nbsp;ko&nbsp;)
                                        </a>
                                        &nbsp;
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
                            <td>Ministère de l'Intérieur et des Outre-mer</td>
                            <td>
                                <ul className="fr-mt-0">
                                    <li>
                                        Administration centrale&nbsp;
                                        <a
                                            className="fr-text--xs"
                                            href="https://agentconnect.gouv.fr/liste-entites-administration-centrale.pdf"
                                        >
                                            (&nbsp;Agents de l'Administration Centrale du MEFSIN
                                            concernés&nbsp;-&nbsp;PDF&nbsp;611&nbsp;ko&nbsp;)
                                        </a>
                                        &nbsp;
                                        <span
                                            className="fr-icon-file-download-line"
                                            aria-hidden="true"
                                        ></span>
                                    </li>
                                    <li>Passage2</li>
                                </ul>
                            </td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de la Transition Écologique / Énergétique</td>
                            <td>Cerbère</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Institut National de la Statistique et des Etudes Economiques
                                (INSEE)
                            </td>
                            <td>INSEE</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Direction Générale des Douanes et Droits Indirects (DGDDI)</td>
                            <td>DGDDI</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Direction Générale des Finances Publiques (DGFIP)</td>
                            <td>FIDGFiP</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Direction générale de la concurrence, de la consommation et de la
                                répression des fraudes (DGCCRF)
                            </td>
                            <td>DGCCRF</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Institut national de la santé et de la recherche médicale (INSERM)
                            </td>
                            <td>INSERM</td>
                            <td>
                                <Badge severity="success">ACTIF</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de la Justice (MJ)</td>
                            <td>Ministère de la Justice</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministères Sociaux</td>
                            <td>Ministères Sociaux</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de la Culture (en cours d'intégration)</td>
                            <td>SSO Ministère de la Culture</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Ministère de l'Europe et des Affaires étrangères</td>
                            <td>AROBAS</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Gendarmerie Nationale</td>
                            <td>Gendarmerie Nationale (Curasso)</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Gendarmerie Nationale</td>
                            <td>Gendarmerie Nationale (Extensso GN)</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Police Nationale</td>
                            <td>Police Nationale (Calypsso)</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Police Nationale</td>
                            <td>Police Nationale (Extensso PN)</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Établissement Public d'aménagement Universitaire de la Région
                                Ile-de-France (EPAURIF)
                            </td>
                            <td>EPAURIF</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Institut national de recherche en sciences et technologies du
                                numérique (INRIA)
                            </td>
                            <td>INRIA</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Réseau Canopé</td>
                            <td>Réseau Canopé</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>Cour des Comptes</td>
                            <td>Cour des Comptes</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>RENATER</td>
                            <td>RENATER</td>
                            <td>
                                <Badge severity="info">PROCHAINEMENT</Badge>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className="fr-h4">
                Que se passe-t-il si votre administration n’est pas partenaire ?
            </h2>
            <p>
                Aucun problème, vous pouvez utiliser AgentConnect ! <br /> Nous nous assurons
                nous-même que vous faites partie de la Fonction Publique en vérifiant <br />
                votre email professionnel et le SIRET de votre organisation.
            </p>
        </div>
    );
}

export default Partners;
