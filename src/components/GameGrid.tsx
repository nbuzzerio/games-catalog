import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(gameQuery.platform);

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
