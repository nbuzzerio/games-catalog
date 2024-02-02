import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && (
        <div
          className="alert alert-danger alert-dismissible text-center fw-bolder text-danger text-uppercase my-5 container fade show"
          role="alert"
        >
          {error}
          <button className="btn-close" aria-label="close" data-bs-dismiss="alert"></button>
        </div>
      )}
      <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
