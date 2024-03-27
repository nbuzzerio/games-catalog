import useGameQueryStore from "../store";

const SortSelector = () => {
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
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <select
            className="form-select text-bg-dark"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option value={option.value} key={option.label}>
                Ordered By: {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortSelector;
