import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useTheme } from "./components/ThemeContext/ThemeContext";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const theme = useTheme();

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className={`theme ${theme ? "dark" : "light"} container-fluid`}>
      <div className="container-fluid">
        <div className="row">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
          <div className="row d-flex flex-column col col-md-10">
            <GameHeading gameQuery={gameQuery} />
            <div className="row row-cols-2 row-cols-lg-3 px-4">
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
