import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../store";

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
  useInfiniteQuery({
    queryKey: ["/games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient<Game>("/games", ReqMethod.GET, controller.signal, {
        params: {
          genres: gameQuery.genreId?.toString(),
          parent_platforms: gameQuery.platformId?.toString(),
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialPageParam: 1, // Add initialPageParam
  });

export default useGames;
