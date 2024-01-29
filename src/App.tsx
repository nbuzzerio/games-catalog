import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import { useTheme } from "./components/ThemeContext/ThemeContext";

function App() {
  const theme = useTheme();

  console.log(theme)
  return (
    <div className={`theme ${theme ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <aside className="border border-info  col-6 d-none d-md-block">ASIDE</aside>
          <aside className="border border-light  col-12 col-md-6">MAIN</aside>
        </div>
      </div>
      <GameGrid />
    </div>
  );
}

export default App;
