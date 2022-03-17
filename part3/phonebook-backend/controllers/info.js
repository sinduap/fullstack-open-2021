import Person from '../model/person.js'

export const getInfo = async (req, res) => {
  try {
    const persons = await Person.find({})
    const element = `<p>Phonebook has info for ${
      persons.length
    } people</p><p>${new Date()}</p>`
    res.status(201).send(element)
  } catch (error) {}
}
