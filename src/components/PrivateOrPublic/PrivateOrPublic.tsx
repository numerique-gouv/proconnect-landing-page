import React from 'react';
import Tile from '../Tiles/Tile';

function PrivateOrPublic({ tiles, stepsInfos }: any) {
    return (
        <React.Fragment>
            <h2 className="fr-h3 fr-mt-2w">Comment ça marche ?</h2>
            <div className="grid-container">
                <div className="grid">
                    {tiles.map(({ illu, content }: any, index: React.Key | null | undefined) => (
                        <Tile illu={illu} content={content} key={index} />
                    ))}
                </div>
            </div>
            {stepsInfos.map(({ question, response }: any, index: React.Key | null | undefined) => (
                <div key={index}>
                    <h2 className="fr-h3 fr-mt-2w">{question}</h2>
                    <p className="fr-col-12 fr-col-md-8">{response}</p>
                </div>
            ))}
        </React.Fragment>
    );
}

export default PrivateOrPublic;
