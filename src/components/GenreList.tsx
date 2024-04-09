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
    <section>
      <div className="flex items-center justify-between gap-3 px-2">
        <h2 className="inline text-4xl md:block">Genres</h2>
        <button
          className={`inline w-64 rounded-lg border p-2 capitalize transition-all duration-300 md:hidden ${collapsed ? "border-dark bg-light text-dark" : "border-light bg-slate-900 text-light"}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "show" : "hide"}&nbsp;genres
        </button>
      </div>
      {isLoading && (
        <div
          className={`spinner-border ${!theme ? "text-dark " : "text-light"}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul
        className={`list-unstyled aside mx-4 overflow-hidden transition-all duration-300 ${collapsed ? "max-h-0 md:max-h-none" : "max-h-[1264px]"}`}
      >
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
    </section>
  );
};

export default GenreList;
