import React from 'react'

const AddContactForm = ({
  onSubmit,
  name,
  number,
  onNumberChange,
  onNameChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:
        <input name='name' value={name} onChange={onNameChange} required />
      </div>
      <div>
        number:
        <input
          name='number'
          value={number}
          onChange={onNumberChange}
          required
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default AddContactForm
