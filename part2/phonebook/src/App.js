import React, { useState } from "react";
import PersonForm from "./components/person-form.component";
import Persons from "./components/persons.component";
import Filter from "./components/filter.component";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewName("");
    setNewPhone("");

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons([
      ...persons,
      {
        name: newName,
        phone: newPhone,
        id: persons[persons.length - 1].id + 1,
      },
    ]);
  };

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setNewName(event.target.value);
    } else if (event.target.name === "phone") {
      setNewPhone(event.target.value);
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
        newName={newName}
        newPhone={newPhone}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
