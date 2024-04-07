import { useState } from "react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/img-url";
import useGameQueryStore from "../store";
import { useTheme } from "./ThemeContext/ThemeContext";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const theme = useTheme();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const [collapsed, setCollapsed] = useState(true);

  if (error) return null;

  return (
    <div className="aside col">
      <h2 className="fs-2 d-inline d-sm-block px-sm-0 px-4 pb-4">Genres</h2>
      <button
        className="btn btn-info text-capitalize d-inline d-sm-none mb-1"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "show" : "hide"} genres
      </button>
      {isLoading && (
        <div
          className={`spinner-border ${!theme ? "text-dark " : "text-light"}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul
        className={`list-unstyled aside col ${collapsed ? "height-collapsed" : ""}`}
      >
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className="d-flex align-items-center mb-3 cursor-pointer gap-3"
          >
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
              className="img-fluid rounded-3 "
              style={{ width: "3rem", height: "3rem", objectFit: "cover" }}
            />
            <button
              className={`hover-underline appearance-none text-start ${genre.id === genreId ? "fw-bolder fs-4" : "fw-normal fs-5"}`}
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
