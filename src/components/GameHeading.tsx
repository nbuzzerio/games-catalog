import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <h1 className="fs-1 px-4 py-4">
      {gameQuery.platform && gameQuery.platform.name}{" "}
      {gameQuery.genre && gameQuery.genre.name} Games
    </h1>
  );
};

export default GameHeading;
