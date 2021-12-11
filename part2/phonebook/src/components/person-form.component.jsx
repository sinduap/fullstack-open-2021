import React from "react";

const Form = ({ handleSubmit, newName, newPhone, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input name="name" value={newName} onChange={handleChange} required />
      </div>
      <div>
        number:{" "}
        <input name="phone" value={newPhone} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
