import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext/ThemeContext";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/games-catalog/");
    }
  };

  return (
    <form className={`relative flex w-full`} onSubmit={handleSubmit}>
      <BsSearch className="absolute bottom-1/2 left-0 translate-x-full translate-y-1/2" />
      <input
        type="text"
        ref={ref}
        placeholder="Search games..."
        className={`w-full rounded-md border px-5 py-1 transition-colors duration-500 ${theme ? "border-light bg-gray-900 text-light placeholder:text-light" : "border-dark bg-gray-400 text-dark placeholder:text-dark"}`}
      />
    </form>
  );
};

export default SearchInput;
