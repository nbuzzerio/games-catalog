import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/img-url";
import { useTheme } from "./ThemeContext/ThemeContext";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const theme = useTheme();
  if (error) return null;

  return (
    <ul className="list-unstyled aside col-2 g-3 py-4">
      {isLoading && (
        <div
          className={`spinner-border ${!theme ? "text-dark " : "text-light"}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {data.map((genre) => (
        <li
          key={genre.id}
          className="my-3 d-flex gap-3 align-items-center cursor-pointer"
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt=""
            className="img-fluid rounded-3 "
            style={{ width: "3rem", height: "3rem" }}
          />
          <span className="fs-5">{genre.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
