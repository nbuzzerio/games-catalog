import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  return (
    <h1 className="fs-1 px-4 py-4">
      {platform && platform.name} {genre?.name || ""} Games
    </h1>
  );
};

export default GameHeading;
