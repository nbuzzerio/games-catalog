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
    <form
      className={`flex-grow-1 relative order-last flex w-full md:order-none`}
      onSubmit={handleSubmit}
    >
      <BsSearch className="absolute bottom-1/2 left-0 translate-x-3 translate-y-1/2" />
      <input
        type="text"
        ref={ref}
        placeholder="Search games..."
        className={`w-full rounded-md border px-10 py-1 transition-colors duration-500 ${theme ? "border-light bg-accent-dark text-light placeholder:text-light" : "border-dark bg-accent-light text-dark placeholder:text-dark"}`}
      />
    </form>
  );
};

export default SearchInput;
