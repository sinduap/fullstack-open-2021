import React from "react";

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((acc, part) => part.exercises + acc, 0)}
    </p>
  );
};

export default Total;
