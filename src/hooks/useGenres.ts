import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient, { ReqMethod } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const controller = new AbortController();

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient("/genres", ReqMethod.GET, controller.signal, {}).then<
        FetchResponse<Genre>
      >((res) => res.json()),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default useGenres;
