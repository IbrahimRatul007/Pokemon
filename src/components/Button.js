import React from "react";

const Button = ({ onHandleFunction, text, className }) => {
  return (
    <button
      onClick={onHandleFunction}
      className={`bg-amber-200 border-2 border-black rounded-lg px-4 py-2 font-bold ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
