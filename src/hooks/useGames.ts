import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { GameQuery } from "../store";
import { Game } from "../interfaces/Game";

const controller = new AbortController();

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["/games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll<Game>("/games", ReqMethod.GET, controller.signal, {
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
