import { Games } from "../hooks/useGames";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card w-100 h-100 flex-column justify-content-between rounded-4 overflow-hidden cursor-pointer bg-secondary  ">
        <img src={game.background_image} alt="" />
        <h3 className="text-center fs-1">{game.name}</h3>
      </div>
    </div>
  );
};

export default GameCard;
