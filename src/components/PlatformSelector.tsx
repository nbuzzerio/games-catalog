import { ChangeEvent } from "react";

import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import { useTheme } from "./ThemeContext/ThemeContext";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const theme = useTheme();

  if (error) return null;

  const handleSelectedPlatform = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlatformId(Number(e.target.value));
  };

  return (
    <select
      className={`w-full rounded-md border p-2 transition-colors duration-300 ${theme ? "border-light bg-dark text-light" : "border-dark bg-light text-dark"}`}
      onChange={handleSelectedPlatform}
      defaultValue={""}
    >
      <option value={""} key={"platform"} disabled>
        Platform
      </option>
      {data?.results.map((platform) => (
        <option value={platform.id} key={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
