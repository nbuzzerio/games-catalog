import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/img-url";
import useGameQueryStore from "../store";
import { useTheme } from "./ThemeContext/ThemeContext";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const theme = useTheme();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  return (
    <div className="aside col">
      <h2 className="fs-2 pb-4">Genres</h2>
      {isLoading && (
        <div
          className={`spinner-border ${!theme ? "text-dark " : "text-light"}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul className="list-unstyled aside col">
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className="mb-3 d-flex gap-3 align-items-center cursor-pointer"
          >
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
              className="img-fluid rounded-3 "
              style={{ width: "3rem", height: "3rem", objectFit: "cover" }}
            />
            <button
              className={`text-start hover-underline appearance-none ${genre.id === genreId ? "fw-bolder fs-4" : "fw-normal fs-5"}`}
              onClick={() => setGenreId(genre.id)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
