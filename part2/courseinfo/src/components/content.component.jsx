import React from "react";
import Part from "./part.component";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ id, ...otherProps }) => (
        <Part key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Content;
