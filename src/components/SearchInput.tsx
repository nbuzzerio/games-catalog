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
    <form className={`w-full flex relative`} onSubmit={handleSubmit}>
      <BsSearch className="absolute left-0 bottom-1/2 translate-x-full translate-y-1/2" />
      <input
        type="text"
        ref={ref}
        placeholder="Search games..."
        className={`px-5 py-1 w-full border rounded-md transition-colors duration-500 ${theme ? "border-light text-light placeholder:text-light bg-gray-900" : "border-dark text-dark placeholder:text-dark bg-gray-400"}`}
      />
    </form>
  );
};

export default SearchInput;
