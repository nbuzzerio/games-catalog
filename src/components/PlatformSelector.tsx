import { ChangeEvent } from "react";

import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const handleSelectedPlatform = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatform = data?.results.filter(
      (platform) => platform.id.toString() === e.target.value,
    )[0];

    if (selectedPlatform) onSelectPlatform(selectedPlatform);
  };

  return (
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <select
            className="form-select text-bg-dark"
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
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
