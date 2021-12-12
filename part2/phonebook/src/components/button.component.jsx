import React from "react";

const Button = ({ text, handleDelete }) => {
  return (
    <button type="button" onClick={handleDelete}>
      {text}
    </button>
  );
};

export default Button;
