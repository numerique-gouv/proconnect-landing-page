import React from 'react';
import Tile from '../Tiles/Tile';

function HowDoesItWork({ tiles }: any) {
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
        </div>
    );
}

export default HowDoesItWork;
