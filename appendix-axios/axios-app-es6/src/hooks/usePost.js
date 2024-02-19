import { useState } from "react";
import axios from "axios";

const usePost = (url, params) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchData = async (data) => {
    setResponse(undefined);
    setError(undefined);
    setIsProcessing(true);
    try {
      const result = await axios.post(url, data, params);
      setResponse(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsProcessing(false);
      setTimeout(()=>{
        setResponse(undefined);
        setError(undefined);
      }, 3000);
    }
  };

  const requestPost = (data) => {
    fetchData(data);
  };

  return { response, error, isProcessing, requestPost };
};

export { usePost };
