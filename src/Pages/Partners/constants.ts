const PARTNERS_LIST: Array<{
    structure: string;
    status: 'pending' | 'active';
    identityProviders: string[];
}> = [
    {
        structure:
            "Institut national de recherche pour l'agriculture, l'alimentation et l'environnement",
        identityProviders: ['INRAE'],
        status: 'active',
    },
    {
        structure: "Commissariat à l'énergie atomique et aux énergies alternatives",
        identityProviders: ["Commissariat à l'Énergie Atomique (CEA)"],
        status: 'active',
    },
    {
        structure:
            "Ministère de l'Économie, des Finances et de la Souveraineté industrielle et numérique (MEFSIN)",
        identityProviders: [
            'Administration centrale',
            'Direction générale des Douanes et Droits Indirects (DGDDI)',
            'Direction générale des Finances publiques (DGFIP)',
            'Institut National de la Statistique et des Études Économiques (INSEE)',
            'Direction générale de la concurrence, de la consommation et de la répression des fraudes (DGCCRF)',
        ],
        status: 'active',
    },
    {
        structure: "Ministère de l'Intérieur et des Outre-mer",
        identityProviders: ['Administration centrale', 'Passage2'],
        status: 'active',
    },
    {
        structure: 'Ministère de la Transition Écologique / Énergétique',
        identityProviders: ['Cerbère'],
        status: 'active',
    },
    {
        structure: 'Institut National de la Statistique et des Etudes Economiques (INSEE)',
        identityProviders: ['INSEE'],
        status: 'active',
    },
    {
        structure: 'Direction Générale des Finances Publiques (DGFIP)',
        identityProviders: ['FIDGFiP'],
        status: 'active',
    },
    {
        structure: 'Institut national de la santé et de la recherche médicale (INSERM)',
        identityProviders: ['INSERM'],
        status: 'active',
    },
    {
        structure: 'Réseau Canopé',
        identityProviders: ['Réseau Canopé'],
        status: 'active',
    },
    {
        structure: "Commissariat à l'énergie atomique et aux énergies Alternatives (CEA)",
        identityProviders: ["Commissariat à l'énergie atomique et aux énergies Alternatives (CEA)"],
        status: 'active',
    },
    {
        structure: 'Cerema',
        identityProviders: ['Orion'],
        status: 'active',
    },
    {
        structure: 'Ministère de la Justice (MJ)',
        identityProviders: ['Ministère de la Justice'],
        status: 'pending',
    },
    {
        structure: 'Ministères Sociaux',
        identityProviders: ['Ministères Sociaux'],
        status: 'pending',
    },
    {
        structure: 'Ministère de la Culture',
        identityProviders: ['SSO Ministère de la Culture'],
        status: 'pending',
    },
    {
        structure: "Ministère de l'Europe et des Affaires étrangères",
        identityProviders: ['AROBAS'],
        status: 'pending',
    },
    {
        structure: 'Gendarmerie Nationale',
        identityProviders: ['Gendarmerie Nationale (Curasso)'],
        status: 'pending',
    },
    {
        structure: 'Police Nationale',
        identityProviders: ['Police Nationale (Calypsso)'],
        status: 'pending',
    },
    {
        structure:
            "Établissement Public d'aménagement Universitaire de la Région Île-de-France (EPAURIF)",
        identityProviders: ['EPAURIF'],
        status: 'pending',
    },
    {
        structure:
            'Institut national de recherche en sciences et technologies du numérique (INRIA)',
        identityProviders: ['INRIA'],
        status: 'pending',
    },
    {
        structure: 'Cour des Comptes',
        identityProviders: ['Cour des Comptes'],
        status: 'pending',
    },
    {
        structure: 'RENATER',
        identityProviders: ['RENATER'],
        status: 'pending',
    },
];

export { PARTNERS_LIST };
