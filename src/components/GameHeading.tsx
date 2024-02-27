import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (g) => g.id === gameQuery.platformId,
  );

  return (
    <h1 className="fs-1 px-4 py-4">
      {platform && platform.name} {genre?.name || ""} Games
    </h1>
  );
};

export default GameHeading;
