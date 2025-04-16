const bossNames = [
  "asso_entreprise_prive",
  "fonction_publique_etat",
  "fonction_publique_hospitaliere",
  "fonction_publique_territoriale",
  "sphere_inclusion",
  "autre_structure_public",
] as const;

type bossNameType = (typeof bossNames)[number];

const recommandationMapping: Record<
  bossNameType,
  Array<{ kind: "service" | "group"; title: string }>
> = {
  fonction_publique_etat: [
    { kind: "group", title: "Suite numérique" },
    { kind: "service", title: "Annuaire des Entreprises" },
    { kind: "service", title: "Tchap" },
    { kind: "service", title: "Datagouv" },
  ],
  fonction_publique_territoriale: [
    { kind: "group", title: "Suite territoriale" },
    { kind: "service", title: "Annuaire des Entreprises" },
    { kind: "service", title: "Démarches Simplifiées" },
    { kind: "service", title: "Datagouv" },
  ],
  fonction_publique_hospitaliere: [
    { kind: "group", title: "Suite numérique" },
    { kind: "service", title: "Grist" },
    { kind: "service", title: "RDV Service Public" },
  ],
  autre_structure_public: [
    { kind: "group", title: "Suite numérique" },
    { kind: "service", title: "Annuaire des entreprises" },
    { kind: "service", title: "RDV Service Public" },
  ],
  sphere_inclusion: [
    { kind: "service", title: "RDV Solidarités" },
    { kind: "service", title: "Immersion Facile" },
    { kind: "service", title: "Les emplois de l'inclusion" },
  ],
  asso_entreprise_prive: [
    { kind: "service", title: "DataPass" },
    { kind: "service", title: "Egapro" },
  ],
};

const bosses: Record<
  bossNameType,
  {
    label: string;
  }
> = {
  fonction_publique_etat: {
    label: "Fonction publique d'État",
  },
  fonction_publique_territoriale: {
    label: "Fonction publique territoriale",
  },
  fonction_publique_hospitaliere: {
    label: "Fonction publique hospitalière",
  },
  sphere_inclusion: {
    label: "Sphère de l'inclusion",
  },
  autre_structure_public: {
    label: "Autre administration publique",
  },
  asso_entreprise_prive: {
    label: "Entreprise et association",
  },
};

export { bosses, bossNames, recommandationMapping };
export type { bossNameType };
