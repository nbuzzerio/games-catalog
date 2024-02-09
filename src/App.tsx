import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useTheme } from "./components/ThemeContext/ThemeContext";

function App() {
  const theme = useTheme();
  return (
    <div className={`theme ${theme ? "dark" : "light"} container-fluid`}>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <GenreList />
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
