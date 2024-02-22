import { ChangeEvent } from "react";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const handleSelectedPlatform = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatform = data.filter(
      (platform) => platform.id.toString() === e.target.value,
    )[0];

    onSelectPlatform(selectedPlatform);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <select className="form-select" onChange={handleSelectedPlatform}>
            {data.map((platform) => (
              <option value={platform.id} key={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
