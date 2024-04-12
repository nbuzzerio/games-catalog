import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";

const Homepage = () => {
  return (
    <div className="flex w-full flex-col justify-center py-3 md:flex-row">
      <GenreList />
      <section className="flex w-full flex-col">
        <GameHeading />
        <div className="flex flex-col gap-3 px-2 sm:flex-row">
          <PlatformSelector />
          <SortSelector />
        </div>
        <GameGrid />
      </section>
    </div>
  );
};

export default Homepage;
