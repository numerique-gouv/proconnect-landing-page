import Tile from "../Tiles/Tile";
import { tyleDataType } from "../../data";

function HowDoesItWork({ tiles }: { tiles: tyleDataType[] }) {
  return (
    <div className="fr-mb-4w">
      <h2 className="fr-h3 fr-mt-2w">Comment ça marche ?</h2>
      <div className="grid-container">
        <div className="grid">
          {tiles.map(({ illu, content }, index) => (
            <Tile illu={illu} content={content} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowDoesItWork;
