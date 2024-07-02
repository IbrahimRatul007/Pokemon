import React, { Children } from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-11/12 sm:w-10/12 max-w-7xl mx-auto my-10">{children}</div>
  );
};

export default Wrapper;
