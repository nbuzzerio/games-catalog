import useGames from "../hooks/useGames";

const GameGrid = () => {
  const {games, error} = useGames();
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
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
