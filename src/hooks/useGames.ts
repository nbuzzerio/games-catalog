import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { ReqMethod } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const controller = new AbortController();

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["/games", gameQuery],
    queryFn: () =>
      apiClient<Game>("/games", ReqMethod.GET, controller.signal, {
        params: {
          genres: gameQuery.genre?.id.toString(),
          parent_platforms: gameQuery.platform?.id.toString(),
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default useGames;
