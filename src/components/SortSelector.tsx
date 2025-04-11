import useGameQueryStore from "../store";
import { useTheme } from "./ThemeContext/ThemeContext";

const SortSelector = () => {
  const theme = useTheme();
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOptions = [
    { value: "", label: "Revelance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <select
      aria-label="Sort Filter"
      className={`w-full rounded-md border p-2 transition-all duration-300 ${theme ? "border-light bg-dark text-light" : "border-dark bg-light text-dark"}`}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      {sortOptions.map((option) => (
        <option value={option.value} key={option.label}>
          Ordered By: {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
