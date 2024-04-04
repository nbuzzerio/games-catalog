import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/games-catalog/");
    }
  };

  return (
    <form className="w-100 d-flex position-relative" onSubmit={handleSubmit}>
      <BsSearch className="input-icon" />
      <input
        type="text"
        ref={ref}
        placeholder="Search games..."
        className="rounded-2 text-bg-dark px-5 py-1 w-100"
      />
    </form>
  );
};

export default SearchInput;
