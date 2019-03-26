import React, { useEffect } from "react";
import useExternalData from "../hooks/useExternalData";
import GenericDataDisplayer from "./GenericDataDisplayer";
import "../App.css";

const ExternalDataDisplayer = ({ url, renderLoader, renderData }) => {
  const { externalData, loadingExternalData, getExternalData } = useExternalData(url);

  useEffect(() => {
    getExternalData();
  }, []);

  return (
    <GenericDataDisplayer
      loading={loadingExternalData}
      renderLoader={renderLoader}
      data={(
        <div>
          {renderData(externalData)}
          <button onClick={() => getExternalData()}>
            Refresh
          </button>
        </div>
      )}
    />
  );
};

export default ExternalDataDisplayer;
