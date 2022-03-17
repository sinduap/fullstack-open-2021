import React, { useState, useEffect } from 'react'
import * as api from './api/index'

import AddContactForm from './components/add-contact-form.component'
import PersonList from './components/person-list.component'
import FilterField from './components/filter-field.component'
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

      person = { ...person, number: number.trim() }

      try {
        const response = await api.editPerson(person.id, person)
        const newPerson = response.data
        setPersons([...persons.map(p => (p.id === person.id ? newPerson : p))])
        setMessage({
          success: true,
          text: 'Person has been succesfully updated',
        })
        setTimeout(() => setMessage(null), 2000)
      } catch (error) {
        setMessage({ success: false, text: error.response.data.error })
      }
    }

    // if person is not already on contact
    if (!person) {
      person = {
        name: name.trim(),
        number: number.trim(),
      }
      try {
        const response = await api.addPerson(person)
        const newPerson = response.data
        setPersons([...persons, newPerson])
        setMessage({ success: true, text: 'Person has been succesfully added' })
        setTimeout(() => setMessage(null), 2000)
      } catch (error) {
        setMessage({ success: false, text: error.response.data.error })
      }
    }
  }

  const handleDelete = async function (id, name) {
    const confirmationMessage = window.confirm(
      `Are you want to delete ${name} contact?`
    )
    if (!confirmationMessage) return
    try {
      await api.deletePerson(id)
      setPersons([...persons.filter(p => p.id !== id)])
      setMessage({ success: true, text: 'Deleted successfully' })
      setTimeout(() => setMessage(null), 2000)
    } catch (error) {
      setMessage({ success: false, text: error.response.data.error })
    }
  }

  useEffect(() => {
    api
      .getAllPersons()
      .then(response => response.data)
      .then(persons => setPersons(persons))
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
      <h3>Add a new contact</h3>
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
