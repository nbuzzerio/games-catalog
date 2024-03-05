import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <h1 className="fs-1 px-4 py-4">
      {platform && platform.name} {genre?.name || ""} Games
    </h1>
  );
};

export default GameHeading;
