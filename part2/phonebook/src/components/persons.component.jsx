import React from "react";

const Person = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map(({ name, number, id }) => (
        <p key={id}>
          {name} {number}
        </p>
      ))}
    </div>
  );
};

export default Person;
