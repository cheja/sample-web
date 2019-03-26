import React from "react";

const BeautifulDataDisplayer = ({ children }) => {
  return (
    <div
      style={{
        border: 'solid',
        borderColor: 'red',
        padding: '10px',
        color: 'red',
        backgroundColor: 'black',
      }}
    >
      {children}
    </div>
  );
};

export default BeautifulDataDisplayer;
