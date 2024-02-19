import { useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

//P : Request, T : Response
const usePost = <P,T>(url:string, params:AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<AxiosError>();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const fetchData = async (data:P) => {
    setResponse(undefined);
    setError(undefined);
    setIsProcessing(true);
    try {
      const result = await axios.post<T,AxiosResponse<T>>(url, data, params);
      setResponse(result);
    } catch (err) {
      setError(err as unknown as AxiosError);
    } finally {
      setIsProcessing(false);
      setTimeout(()=>{
        setResponse(undefined);
        setError(undefined);
      }, 3000);
    }
  };

  const requestPost = (data:P) => {
    fetchData(data);
  };

  return { response, error, isProcessing, requestPost };
};

export { usePost };
