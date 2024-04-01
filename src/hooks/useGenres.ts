import { useQuery } from "@tanstack/react-query";
import apiClient, { ReqMethod } from "../services/api-client";
import { Genre } from "../interfaces/Genre";

const controller = new AbortController();

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.getAll<Genre>("/genres", ReqMethod.GET, controller.signal, {}),
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });

export default useGenres;
