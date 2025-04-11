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
    <Link to={`/games-catalog/games/${game.slug}`}>
      <img
        src={
          game.background_image.slice(-4) === "webp"
            ? game.background_image
            : getCroppedImageUrl(game.background_image)
        }
        alt=""
        className="aspect-[3/2] w-full flex-shrink object-cover"
        loading="eager"
      />
      <div className="flex min-h-[32px] items-center justify-between px-3 py-2">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <MetacriticScore score={game.metacritic} />
      </div>
      <h2 className="text-warning overflow-ellipsis p-3 text-center text-2xl">
        {game.name}
      </h2>
      <Rating rating={game.rating_top} />
    </Link>
  );
};

export default GameCard;
