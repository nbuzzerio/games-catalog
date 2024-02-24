const SortSelector = () => {
  const sortOptions = [
    "Revelance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];

  return (
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <select className="form-select">
            {sortOptions.map((option) => (
              <option value={option} key={option}>
                Ordered By: {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortSelector;
