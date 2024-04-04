import { useQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { Screenshot } from "../interfaces/Screenshot";

const controller = new AbortController();

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      apiClient.getAll<Screenshot>(
        `/games/${gameId}/screenshots`,
        ReqMethod.GET,
        controller.signal,
        {},
      ),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default useScreenshots;
