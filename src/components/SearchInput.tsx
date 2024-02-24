import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="w-100 d-flex position-relative">
      <BsSearch className="input-icon" />
      <input
        type="text"
        placeholder="Search games..."
        className="rounded-2 text-bg-dark px-5 py-1 w-100"
      />
    </div>
  );
};

export default SearchInput;
