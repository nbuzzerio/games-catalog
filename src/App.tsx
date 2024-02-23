import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useTheme } from "./components/ThemeContext/ThemeContext";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const theme = useTheme();

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
          <div className="row d-flex flex-column col">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
