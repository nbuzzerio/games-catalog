import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useTheme } from "../components/ThemeContext/ThemeContext";

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
      <p className="">{game?.description_raw}</p>
    </>
  );
};

export default GameDetailPage;
