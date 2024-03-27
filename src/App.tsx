import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useTheme } from "./components/ThemeContext/ThemeContext";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const theme = useTheme();

  return (
    <div className={`theme ${theme ? "dark" : "light"} container-fluid`}>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row">
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
    </div>
  );
}

export default App;
