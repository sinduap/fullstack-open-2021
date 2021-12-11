import React from "react";

const Form = ({ handleSubmit, name, number, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input name="name" value={name} onChange={handleChange} required />
      </div>
      <div>
        number:{" "}
        <input name="number" value={number} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
