import React from "react";

const Person = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map(({ name, phone, id }) => (
        <p key={id}>
          {name} {phone}
        </p>
      ))}
    </div>
  );
};

export default Person;
