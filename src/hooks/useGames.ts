import { useEffect, useState } from "react";
import apiClient, { ReqMethod } from "../services/api-client";

export interface Games {
  id: number;
  name: string;
  background_image: string;
}

interface GamesResponse {
  count: number;
  results: Games[];
}

export default function useGames() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient("/games", ReqMethod.GET, controller.signal)
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
        setError("");
      })
      .catch((er) => {
        console.log(er);
        return setError("Error loading games");
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}
