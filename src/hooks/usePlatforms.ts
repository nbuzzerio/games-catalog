import { useQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const controller = new AbortController();

const usePlatforms = () =>
  useQuery({
    queryKey: ["/platforms/lists/parents"],
    queryFn: () =>
      apiClient(
        "/platforms/lists/parents",
        ReqMethod.GET,
        controller.signal,
        {},
      ).then<FetchResponse<Platform>>((res) => res.json()),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default usePlatforms;
