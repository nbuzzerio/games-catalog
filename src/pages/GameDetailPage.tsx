import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useTheme } from "../components/ThemeContext/ThemeContext";
import GameDescription from "../components/GameDescription";
import DescriptionItem from "../components/DescriptionItem";
import MetacriticScore from "../components/MetacriticScore";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const theme = useTheme();
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;

  return (
    <>
      {isLoading && (
        <div
          className={`spinner-border m-5 ${!theme ? "text-dark" : "text-light"}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <h1>{game?.name}</h1>
      {game?.description_raw && (
        <GameDescription desc={game?.description_raw} />
      )}
      <dl className="grid grid-cols-2 gap-5">
        <DescriptionItem term="platform">
          {game?.parent_platforms?.map(({ platform }) => (
            <div key={platform.id}>{platform.name}</div>
          ))}
        </DescriptionItem>
        <DescriptionItem term="genres">
          {game?.genres?.map((genre) => <div key={genre.id}>{genre.name}</div>)}
        </DescriptionItem>
        {game?.metacritic && (
          <DescriptionItem term="metascore">
            <MetacriticScore score={game?.metacritic} />
          </DescriptionItem>
        )}
        <DescriptionItem term="publishers">
          {game?.publishers?.map((publisher) => (
            <div key={publisher.id}>{publisher.name}</div>
          ))}
        </DescriptionItem>
      </dl>
      {game?.id && <GameTrailer gameId={game?.id} />}
      {game?.id && <GameScreenshots gameId={game?.id} />}
    </>
  );
};

export default GameDetailPage;
