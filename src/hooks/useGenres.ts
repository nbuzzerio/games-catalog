import { useEffect, useState } from "react";
import apiClient, { ReqMethod } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  interface GenresResponse {
    count: number;
    results: Genre[];
  }

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient("/genres", ReqMethod.GET, controller.signal)
      .then((res) => {
        if (!res.ok) console.log("Response status: ", res.status, res);

        if (res.status !== 200) {
          setError("Error loading games");
          throw new Error(JSON.stringify(res.status));
        }
        return res.json();
      })
      .then((data: GenresResponse) => {
        // console.log(data);
        setGenres(data.results);
        setLoading(false);
        setError("");
      })
      .catch((er) => {
        console.log(er);
        setError("Error loading games");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;