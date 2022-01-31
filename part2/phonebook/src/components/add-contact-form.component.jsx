import React from 'react';

const AddContactForm = ({
  handleSubmit,
  name,
  number,
  handleNumberChange,
  handleNameChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{' '}
        <input name='name' value={name} onChange={handleNameChange} required />
      </div>
      <div>
        number:{' '}
        <input
          name='number'
          value={number}
          onChange={handleNumberChange}
          required
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default AddContactForm;
