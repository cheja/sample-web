import { useState } from "react";
import useLoader from "./useLoader";
import getExternalData from "../api/getExternalData";

const useExternalData = (url) => {
  const { loading, startLoading, finishLoading } = useLoader(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    startLoading();
    const response = await getExternalData(url);
    setData(response);
    finishLoading();
  }

  return { externalData: data, loadingExternalData: loading, getExternalData: getData };
};

export default useExternalData;
