import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && (
        <p
          className="alert alert-danger text-center fw-bolder text-danger text-uppercase my-5 "
          role="alert"
        >
          {error}
        </p>
      )}
      <ul className="row">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
