import React from 'react';

const FilterField = ({ onSearchChange }) => {
  return (
    <div>
      Filter shown with:
      <input type='search' name='filter' onChange={onSearchChange} />
    </div>
  );
};

export default FilterField;
