import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useTheme } from "../components/ThemeContext/ThemeContext";
import GameDescription from "../components/GameDescription";

const GameDetailPage = () => {
  const theme = useTheme();
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;

  return (
    <>
      {isLoading && (
        <div
          className={`spinner-border m-5 ${!theme ? "text-dark " : "text-light"}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <h1>{game?.name}</h1>
      {game?.description_raw && (
        <GameDescription desc={game?.description_raw} />
      )}
    </>
  );
};

export default GameDetailPage;
