import { useState } from "react";

const useLoader = (initialValue) => {
  const [loading, setLoading] = useState(initialValue);

  const startLoading = () => {
    setLoading(true);
  }

  const finishLoading = () => {
    setLoading(false);
  };

  return { loading, startLoading, finishLoading };
};

export default useLoader;
