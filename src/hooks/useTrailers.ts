import { useQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { Trailer } from "../interfaces/Trailer";

const controller = new AbortController();

const useTrailers = (gameId: number) =>
  useQuery({
    queryKey: ["trailer", gameId],
    queryFn: () =>
      apiClient.getAll<Trailer>(
        `/games/${gameId}/movies`,
        ReqMethod.GET,
        controller.signal,
        {},
      ),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default useTrailers;
