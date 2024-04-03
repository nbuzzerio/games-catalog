import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useTheme } from "../components/ThemeContext/ThemeContext";
import GameDescription from "../components/GameDescription";
import DescriptionItem from "../components/DescriptionItem";
import MetacriticScore from "../components/MetacriticScore";

const GameDetailPage = () => {
  const theme = useTheme();
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;

  console.log("game :", game);

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
      <div className="row">
        <dl className="col-md-6">
          <DescriptionItem term="platform">
            {game?.parent_platforms?.map(({ platform }) => (
              <div key={platform.id}>{platform.name}</div>
            ))}
          </DescriptionItem>
          <DescriptionItem term="genres">
            {game?.genres?.map((genre) => (
              <div key={genre.id}>{genre.name}</div>
            ))}
          </DescriptionItem>
        </dl>

        <dl className="col-md-6">
          {game?.metacritic && (
            <DescriptionItem term="metascore">
              <div style={{ width: "60px" }}>
                <MetacriticScore score={game?.metacritic} />
              </div>
            </DescriptionItem>
          )}
          <DescriptionItem term="publishers">
            {game?.publishers?.map((publisher) => (
              <div key={publisher.id}>{publisher.name}</div>
            ))}
          </DescriptionItem>
        </dl>
      </div>
    </>
  );
};

export default GameDetailPage;
