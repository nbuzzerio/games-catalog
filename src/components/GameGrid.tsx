import { useEffect, useState } from "react";
import apiClient, { ReqMethod } from "../services/api-client";

interface Games {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient("/games", ReqMethod.GET)
      .then((res) => {
        if (!res.ok) console.log("Response status: ", res.status, res);

        if (res.status !== 200) {
          setError("Error loading games");
          throw new Error(JSON.stringify(res.status));
        }
        return res.json();
      })
      .then((data: GamesResponse) => {
        console.log(data);
        setGames(data.results);
      })
      .catch((er) => {
        console.log(er);
        return setError("Error loading games");
      });

    return () => {};
  }, []);

  return (
    <>
      {error && (
        <p
          className="alert alert-danger text-center fw-bolder text-danger text-uppercase my-5 "
          role="alert"
        >
          {error}
        </p>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
