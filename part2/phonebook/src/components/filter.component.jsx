import React from "react";

const Filter = ({handleChange}) => {
  return (
    <div>
      Filter shown with:
      <input type="search" name="filter" onChange={handleChange} />
    </div>
  );
};

export default Filter;
