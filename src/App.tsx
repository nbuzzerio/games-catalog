import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useTheme } from "./components/ThemeContext/ThemeContext";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const theme = useTheme();

  return (
    <div className={`theme ${theme ? "dark" : "light"} container-fluid`}>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
}

export default App;
