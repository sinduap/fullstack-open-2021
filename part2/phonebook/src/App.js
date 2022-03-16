import React, { useState, useEffect } from 'react'
import AddContactForm from './components/add-contact-form.component'
import PersonList from './components/person-list.component'
import FilterField from './components/filter-field.component'
import { getPersons, addPerson, deletePerson, editPerson } from './helpers'
import Notification from './components/notification.component'

const App = () => {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)

  const handleSubmit = async function (event) {
    event.preventDefault()
    setName('')
    setNumber('')

    let person = persons.find(
      p => p.name.toLowerCase() === name.toLowerCase().trim()
    )

    // if person already on contact
    if (person) {
      const confirmationMessage = window.confirm(
        `Are you want to update ${person.name} contact?`
      )
      if (!confirmationMessage) return

      const updatedPerson = await editPerson(person.id, {
        ...person,
        number: number.trim(),
      })
      setPersons([
        ...persons.map(p => (p.id === updatedPerson.id ? updatedPerson : p)),
      ])
      setMessage('Person has been succesfully updated')
      setTimeout(() => setMessage(null), 2000)
    }

    // if person is not already on contact
    if (!person) {
      person = {
        name: name.trim(),
        number: number.trim(),
      }
      const newPerson = await addPerson(person)
      setPersons([...persons, newPerson])
      setMessage('Person has been succesfully added')
      setTimeout(() => setMessage(null), 2000)
    }
  }

  const handleDelete = async function (id, name) {
    const confirmationMessage = window.confirm(
      `Are you want to delete ${name} contact?`
    )
    if (!confirmationMessage) return
    try {
      const { id: deletedId } = await deletePerson(id)
      setPersons([...persons.filter(p => p.id !== deletedId)])
      setMessage('Deleted successfully')
      setTimeout(() => setMessage(null), 2000)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPersons().then(persons => setPersons(persons))
  }, [])

  useEffect(() => {
    if (!message) {
      return
    }

    const id = setTimeout(() => {
      setMessage(null)
    }, 2000)

    return () => {
      if (id) {
        clearTimeout(id)
      }
    }
  }, [message])

  const handleNameChange = function (event) {
    setName(event.target.value)
  }

  const handleNumberChange = function (event) {
    setNumber(event.target.value)
  }

  const handleSearchChange = function (event) {
    setSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase().trim())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <FilterField onSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <AddContactForm
        name={name}
        number={number}
        onNumberChange={handleNumberChange}
        onNameChange={handleNameChange}
        onSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <PersonList filteredPersons={filteredPersons} onDelete={handleDelete} />
    </div>
  )
}

export default App
