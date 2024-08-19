const bossNames = [
  "fonction_publique_etat",
  "fonction_publique_territoriale",
  "fonction_publique_hospitaliere",
  "operateur_etat",
  "autre_structure_public",
  "asso_entreprise_prive",
] as const;

type bossNameType = (typeof bossNames)[number];

const bosses: Record<
  bossNameType,
  {
    label: string;
    isEligible: boolean;
  }
> = {
  fonction_publique_etat: {
    label: "Fonction publique d'État",
    isEligible: true,
  },
  fonction_publique_territoriale: {
    label: "Fonction publique territoriale",
    isEligible: true,
  },
  fonction_publique_hospitaliere: {
    label: "Fonction publique hospitalière",
    isEligible: true,
  },
  operateur_etat: {
    label: "Opérateur de l'État",
    isEligible: true,
  },
  autre_structure_public: {
    label: "Autre structure du service public",
    isEligible: true,
  },
  asso_entreprise_prive: {
    label: "Association ou entreprise privée",
    isEligible: false,
  },
};

export { bosses, bossNames };
export type { bossNameType };
