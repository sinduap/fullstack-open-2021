import React from "react";

import Header from "./header.component";
import Content from "./content.component";
import Total from "./total.component";

const Course = ({ name, parts }) => {
  const total = parts.reduce((acc, part) => part.exercises + acc, 0);

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default Course;
