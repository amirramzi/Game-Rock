import { useState, useEffect } from "react";
import apiClinet from "../services/api-clinet";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requsetConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  useEffect(
    () => {
      setIsLoading(true);
      apiClinet
        .get<FetchResponse<T>>(endpoint, { ...requsetConfig })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    },
    deps ? [...deps] : []
  );
  return { data, error, isloading };
};
export default useData;
