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
    <section className="min-w-72 px-2 pb-4 sm:px-0">
      <button
        className={`w-full rounded-lg border p-2 font-bold capitalize transition-all duration-300 sm:hidden ${collapsed ? "border-dark  shadow-inner" : "border-light  shadow"}
        ${theme ? "bg-accent-dark text-light" : "bg-accent-light text-dark"}
        `}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "show" : "hide"}&nbsp;genres
      </button>

      <div
        className={`mx-4 overflow-hidden transition-all duration-300 ${collapsed ? "max-h-0 sm:max-h-none" : "max-h-[1264px]"}`}
      >
        <h2 className="inline text-4xl sm:block">Genres</h2>
        {isLoading && (
          <div
            className={`spinner-border flex flex-col ${!theme ? "text-dark " : "text-light"}`}
            role="status"
          >
            <div
              className={`m-10 h-10 w-10 animate-spin rounded-full border-4 border-r-0 border-t-0 transition-colors duration-300 ${theme ? "border-accent-dark" : "border-accent-light"}`}
            ></div>
            <span className="invisible">Loading...</span>
          </div>
        )}
        <ul className="list-unstyled">
          {data?.results.map((genre) => (
            <li
              key={genre.id}
              className="mb-3 flex cursor-pointer items-center gap-3 first-of-type:pt-4"
            >
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt=""
                className="h-12 w-12 rounded-md object-cover"
              />
              <button
                className={`text-start ${genre.id === genreId ? "text-2xl font-bold underline" : "text-2xl font-normal"}`}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GenreList;
