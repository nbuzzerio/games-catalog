import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card w-100 h-100 flex-column justify-content-between rounded-4 overflow-hidden cursor-pointer bg-secondary">
        <img src={game.background_image} alt="" className="card-img" />
        <h3 className="text-center fs-1 text-warning card-footer">
          {game.name}
        </h3>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
