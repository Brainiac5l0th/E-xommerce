import React from "react";

const BtnOutStock = ({ children }) => {
  return (
    <button
      className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none cursor-not-allowed rounded"
      disabled
    >
      {children}
    </button>
  );
};

export default BtnOutStock;
