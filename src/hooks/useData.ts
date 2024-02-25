import { useEffect, useState } from "react";
import apiClient, { ReqMethod } from "../services/api-client";
import { GameQuery } from "../App";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface ReqConfigProps {
  params?: {
    genres?: string;
    platforms?: string;
    ordering?: string;
    search?: string;
  };
}

type DepProps = (GameQuery | null)[];

const useData = <T>(
  endpoint: string,
  requestConfig?: ReqConfigProps,
  deps?: DepProps,
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient(endpoint, ReqMethod.GET, controller.signal, requestConfig)
        .then((res) => {
          if (!res.ok) console.log("Response status: ", res.status, res);

          if (res.status !== 200) {
            setError("Error loading games");
            throw new Error(JSON.stringify(res.status));
          }
          return res.json();
        })
        .then((data: FetchResponse<T>) => {
          setData(data.results);
          setLoading(false);
          setError("");
        })
        .catch((er) => {
          console.log(er);
          setError("Error loading games");
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
};

export default useData;
