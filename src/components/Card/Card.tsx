import { Card as DsfrCard } from '@codegouvfr/react-dsfr/Card';
// import { Badge } from '@codegouvfr/react-dsfr/Badge';

interface Offre {
    description: string;
    url: string;
    title: string;
    openPrivate?: boolean;
}

type Props = {
    offre: Offre;
};

const Card: React.FC<Props> = ({ offre: { description, url, title } }) => {
    return (
        <div
            className="container fr-col-12 fr-col-md-4 fr-mt-2w"
            style={{
                width: 200,
            }}
        >
            <DsfrCard
                // start={
                //     openPrivate ? (
                //         <ul className="fr-badges-group">
                //             <li>
                //                 <Badge severity="success">Ouvert au privé</Badge>
                //             </li>
                //         </ul>
                //     ) : null
                // }
                background
                border
                desc={description}
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
