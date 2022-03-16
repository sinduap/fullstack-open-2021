import React from "react";

const Button = ({ text, onDelete }) => {
  return (
    <button type="button" onClick={onDelete}>
      {text}
    </button>
  );
};

export default Button;
