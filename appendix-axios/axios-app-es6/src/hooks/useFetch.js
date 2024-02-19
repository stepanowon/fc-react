import { useState } from "react";
import axios from "axios";

const useFetch = (url, params) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setResponse(undefined);
    setError(undefined);
    setIsLoading(true);
    try {
      const result = await axios.get(url, params);
      setResponse(result);
    } catch (err) {
      setError(err);
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