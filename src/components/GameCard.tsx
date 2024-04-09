import { Link } from "react-router-dom";
import { Game } from "../interfaces/Game";
import { getCroppedImageUrl } from "../services/img-url";
import MetacriticScore from "./MetacriticScore";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="aspect-square w-full underline transition-transform duration-300 hover:scale-105 md:aspect-[.75] xl:aspect-square">
      <Link to={`/games-catalog/games/${game.slug}`} className="w-auto">
        <div className="card flex-column flex h-full w-full cursor-pointer justify-between overflow-hidden rounded-lg bg-gray-900">
          <img
            src={getCroppedImageUrl(game.background_image)}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="card-body">
            <div className="mx-3 flex items-center justify-between py-2">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <MetacriticScore score={game.metacritic} />
            </div>
            <h3 className="text-warning overflow-ellipsis text-center text-2xl">
              {game.name}
            </h3>
            <Rating rating={game.rating_top} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
