import { useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const useFetch = <T>(url:string, params:AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setResponse(undefined);
    setError(undefined);
    setIsLoading(true);
    try {
      const result: AxiosResponse<T> = await axios.get<T, AxiosResponse<T>>(url, params);
      setResponse(result);
    } catch (err) {
      setError(err as unknown as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const requestFetch = () => {
    fetchData();
  };

  return { response, error, isLoading, requestFetch };
};

export { useFetch };