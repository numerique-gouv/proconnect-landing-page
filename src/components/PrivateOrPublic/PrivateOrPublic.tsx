import React from 'react';
import Tile from '../Tiles/Tile';

function PrivateOrPublic({ tiles, stepsInfos }: any) {
    return (
        <div className="fr-mb-4w">
            <h2 className="fr-h3 fr-mt-2w">Comment ça marche ?</h2>
            <div className="grid-container">
                <div className="grid">
                    {tiles.map(({ illu, content }: any, index: React.Key | null | undefined) => (
                        <Tile illu={illu} content={content} key={index} />
                    ))}
                </div>
            </div>
            {stepsInfos.map(
                (
                    { question, response, link, descriptionLink }: any,
                    index: React.Key | null | undefined,
                ) => (
                    <div key={index}>
                        <h2 className="fr-h3 fr-mt-2w">{question}</h2>
                        <p className="fr-col-12 fr-col-md-8 fr-mb-1w">{response}</p>
                        <div className="fr-mb-3w">
                            {link ? (
                                <a href={link} className="blue-france fr-mb-5w">
                                    {descriptionLink}&nbsp;
                                    <span
                                        className="fr-icon-arrow-right-line"
                                        aria-hidden="true"
                                    ></span>
                                </a>
                            ) : null}
                        </div>
                    </div>
                ),
            )}
        </div>
    );
}

export default PrivateOrPublic;
