import { ChangeEvent } from "react";

import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  const handleSelectedPlatform = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlatformId(Number(e.target.value));
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
