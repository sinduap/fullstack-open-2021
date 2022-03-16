import React from 'react'
import Button from './button.component'

const PersonList = ({ filteredPersons, onDelete }) => {
  return (
    <div>
      {filteredPersons.map(({ name, number, id }, idx) => (
        <div key={idx}>
          {name} {number}
          <Button text='delete' onDelete={() => onDelete(id, name)} />
        </div>
      ))}
    </div>
  )
}

export default PersonList
