import { useState, useCallback } from "react";
import axios from "axios";
const useHttpHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      if (requestConfig.type === "get") {
        const response = await axios.get(requestConfig.url);
        const data = await response.data;
        applyData(data.data);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return [sendRequest, isLoading, error];
};

export default useHttpHook;
