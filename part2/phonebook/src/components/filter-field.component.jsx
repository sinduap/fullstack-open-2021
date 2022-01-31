import React from 'react';

const FilterField = ({ handleSearchChange }) => {
  return (
    <div>
      Filter shown with:
      <input type='search' name='filter' onChange={handleSearchChange} />
    </div>
  );
};

export default FilterField;
