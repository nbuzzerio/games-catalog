import { useState } from "react";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import PlatformSelector from "./PlatformSelector";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(selectedPlatform);

  return (
    <>
      {error && (
        <div
          className="alert alert-danger alert-dismissible text-center fw-bolder text-danger text-uppercase my-5 container fade show col"
          role="alert"
        >
          {error}
          <button
            className="btn-close"
            aria-label="close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      )}
      {!error && (
        <div className="row col">
          <PlatformSelector
            onSelectPlatform={(platform) => {
              setSelectedPlatform(platform);
            }}
          />
          <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 col">
            {isLoading &&
              skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
            {data.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GameGrid;
