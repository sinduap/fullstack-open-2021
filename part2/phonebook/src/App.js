import React, { useState, useEffect } from 'react';
import AddContactForm from './components/add-contact-form.component';
import PersonList from './components/person-list.component';
import FilterField from './components/filter-field.component';
import { getPersons, addPerson, deletePerson, changePerson } from './helpers';
import Notification from './components/notification.component';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState(null);

  const loadPersons = async function () {
    const data = await getPersons();
    setPersons(data);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    setNewName('');
    setNewNumber('');

    let person = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase().trim()
    );

    // if person already on contact
    if (
      person &&
      !window.confirm(`Are you want to update ${person.name} contact?`)
    )
      return;

    if (person) {
      const message = await changePerson(person.id, {
        ...person,
        number: newNumber.trim(),
      });
      setMessage(message);
      setTimeout(() => setMessage(null), 2000);
    }

    // if person is not already on contact
    if (!person) {
      person = {
        id: persons.length + 1,
        name: newName.trim(),
        number: newNumber.trim(),
      };
      const message = await addPerson(person);
      setMessage(message);
      setTimeout(() => setMessage(null), 2000);
    }

    loadPersons();
  };

  const handleDelete = async function (id, name) {
    const confirmationMessage = window.confirm(
      `Are you want to delete ${name} contact?`
    );
    if (!confirmationMessage) return;
    try {
      const message = await deletePerson(id);
      setMessage(message);
      setTimeout(() => setMessage(null), 2000);
      loadPersons();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(loadPersons, []);

  const handleNameChange = function (event) {
    setNewName(event.target.value);
  };

  const handleNumberChange = function (event) {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = function (event) {
    setSearch(event.target.value);
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <FilterField handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <AddContactForm
        handleNumberChange={handleNumberChange}
        handleNameChange={handleNameChange}
        name={newName}
        number={newNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <PersonList
        filteredPersons={filteredPersons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
