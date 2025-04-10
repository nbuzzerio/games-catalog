import { Link } from "react-router-dom";
import { Game } from "../interfaces/Game";
import { getCroppedImageUrl } from "../services/img-url";
import MetacriticScore from "./MetacriticScore";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";
import { useTheme } from "./ThemeContext/ThemeContext";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const theme = useTheme();

  return (
    <Link
      to={`/games-catalog/games/${game.slug}`}
      className={`w-full overflow-hidden rounded-md pb-3 transition-all duration-300 hover:scale-[.98] ${theme ? "bg-accent-dark" : "bg-accent-light"}`}
    >
      <img
        src={
          game.background_image.slice(-4) === "webp"
            ? game.background_image
            : getCroppedImageUrl(game.background_image)
        }
        alt=""
        className="h-auto w-full flex-shrink object-cover"
      />
      <div className="flex items-center justify-between px-3 py-2">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <MetacriticScore score={game.metacritic} />
      </div>
      <h3 className="text-warning overflow-ellipsis p-3 text-center text-2xl">
        {game.name}
      </h3>
      <Rating rating={game.rating_top} />
    </Link>
  );
};

export default GameCard;
