import React from "react";

const Button = ({ children, handler }) => {
  return (
    <button
      className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
      onClick={handler}
    >
      Add To Cart
    </button>
  );
};

export default Button;
