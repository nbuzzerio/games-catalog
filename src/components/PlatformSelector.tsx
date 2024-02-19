import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <select className="form-select">
            {data.map((platform) => (
              <option value={platform.id}>{platform.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
