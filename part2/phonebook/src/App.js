import React, { useState, useEffect } from "react";
import PersonForm from "./components/person-form.component";
import Persons from "./components/persons.component";
import Filter from "./components/filter.component";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewName("");
    setNewNumber("");

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons([
      ...persons,
      {
        name: newName,
        number: newNumber,
        id: persons[persons.length - 1].id + 1,
      },
    ]);
  };

  useEffect(() => {
    const getPersons = async () => {
      const response = await axios.get("http://localhost:3001/persons");
      setPersons(response.data);
    };
    getPersons();
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setNewName(event.target.value);
    } else if (event.target.name === "number") {
      setNewNumber(event.target.value);
    } else {
      setSearch(event.target.value);
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
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
