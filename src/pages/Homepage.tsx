import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";

const Homepage = () => {
  return (
    <div className="ice flex w-full justify-center py-3">
      <div className="row w-full overflow-hidden">
        <GenreList />
        <div className="row d-flex flex-column col col-md-10">
          <GameHeading />
          <div className="row row-cols-2 row-cols-lg-3 px-4">
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameGrid />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
