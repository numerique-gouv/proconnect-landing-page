const bossNames = [
  "fonction_publique_etat",
  "fonction_publique_territoriale",
  "fonction_publique_hospitaliere",
  "operateur_etat",
  "autre_structure_public",
  "asso_entreprise_prive",
] as const;

type bossNameType = (typeof bossNames)[number];
type categoryType =
  | "fp-etat"
  | "fp-territoriale"
  | "fp-hospitaliere"
  | "operateur-etat"
  | "autre-structure"
  | "private";

const bosses: Record<
  bossNameType,
  {
    label: string;
    category: categoryType;
  }
> = {
  fonction_publique_etat: {
    label: "Fonction publique d'État",
    category: "fp-etat",
  },
  fonction_publique_territoriale: {
    label: "Fonction publique territoriale",
    category: "fp-territoriale",
  },
  fonction_publique_hospitaliere: {
    label: "Fonction publique hospitalière",
    category: "fp-hospitaliere",
  },
  operateur_etat: {
    label: "Opérateur de l'État",
    category: "operateur-etat",
  },
  autre_structure_public: {
    label: "Autre structure du service public",
    category: "autre-structure",
  },
  asso_entreprise_prive: {
    label: "Association ou entreprise privée",
    category: "private",
  },
};

export { bosses, bossNames };
export type { bossNameType };
