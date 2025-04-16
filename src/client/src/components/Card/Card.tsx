import { Card as DsfrCard } from "@codegouvfr/react-dsfr/Card";

interface Offre {
  description?: string;
  url: string;
  title: string;
  openPrivate?: boolean;
}

type Props = {
  offre: Offre;
  customizedMdCol?: string;
};

const Card: React.FC<Props> = ({
  offre: { description, url, title },
  customizedMdCol,
}) => {
  return (
    <div
      className={`fr-col-12 ${customizedMdCol} fr-mt-2w`}
      style={{
        width: 200,
      }}
    >
      <DsfrCard
        background
        border
        desc={description || "-"}
        endDetail="Visiter le site"
        enlargeLink
        linkProps={{
          to: url,
        }}
        size="medium"
        title={title}
        titleAs="h3"
      />
    </div>
  );
};

export default Card;
