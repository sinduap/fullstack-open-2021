import React, { useState, useEffect } from "react";
import PersonForm from "./components/person-form.component";
import Persons from "./components/persons.component";
import Filter from "./components/filter.component";
import { getPersons, addPerson, deletePerson, changePerson } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNewName("");
    setNewNumber("");

    // If person already added
    if (persons.find((person) => person.name === newName)) {
      // eslint-disable-next-line no-restricted-globals
      const corfimationMessage = confirm(
        `${newName} is already added to phonebook, replace old number with the new one?`
      );
      if (!corfimationMessage) return;
      const [{ id }] = persons.filter((person) => person.name === newName);

      try {
        changePerson(id, { name: newName, number: newNumber });
        setPersons([
          ...persons.filter((person) => person.name !== newName),
          { id, name: newName, number: newNumber },
        ]);
      } catch (error) {
        console.error(error);
      }

      return;
    }

    // if person wasn't already added
    try {
      await addPerson({ name: newName, number: newNumber });
      setPersons([
        ...persons,
        {
          id: persons[persons.length - 1].id + 1,
          name: newName,
          number: newNumber,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmationMessage = confirm(`Delete ${name}?`);
    if (!confirmationMessage) return;
    try {
      await deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getPersons();
      setPersons(data);
    };
    getData();
  }, []);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setNewName(event.target.value);
        return;
      case "number":
        setNewNumber(event.target.value);
        return;
      case "filter":
        setSearch(event.target.value);
        return;
      default:
        return;
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleChange} />
      <h3>Add a new</h3>
      <PersonForm
        handleChange={handleChange}
        name={newName}
        number={newNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
