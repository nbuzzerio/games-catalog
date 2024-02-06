import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 col">
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
