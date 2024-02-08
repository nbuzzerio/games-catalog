import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/img-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul className="list-unstyled">
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
