import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "../services/img-url";
import MetacriticScore from "./MetacriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="gamecard col-12 col-md-6 col-lg-4 p-4">
      <div className="card w-100 h-100 flex-column justify-content-between rounded-4 overflow-hidden cursor-pointer bg-secondary">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt=""
          className="img-cover"
        />
        <div className="card-body pt-0 flex-grow-0 ">
          <h3 className="text-center fs-1 text-warning card-footer overflow-ellipsis">
            {game.name}
          </h3>
          <div className="d-flex justify-content-between align-items-center mx-3">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetacriticScore score={game.metacritic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
