import { useQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { Game } from "../interfaces/Game";

const controller = new AbortController();

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<Game>(
        `/games/${slug}`,
        ReqMethod.GET,
        controller.signal,
        {},
      ),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default useGame;
