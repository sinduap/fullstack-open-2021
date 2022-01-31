import React from "react";
import Button from "./button.component";

const PersonList = ({ filteredPersons, handleDelete }) => {
  return (
    <div>
      {filteredPersons.map(({ name, number, id }, idx) => (
        <div key={idx}>
          {name} {number}
          <Button text="delete" handleDelete={() => handleDelete(id, name)} />
        </div>
      ))}
    </div>
  );
};

export default PersonList;
