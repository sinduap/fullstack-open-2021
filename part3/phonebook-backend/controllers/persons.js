import Person from '../model/person.js'

export const getPersons = async (req, res, next) => {
  console.log(process.env.MONGOBB_URI)
  try {
    const persons = await Person.find({})
    res.status(200).json(persons)
  } catch (error) {
    next(error)
  }
}

export const getPerson = async (req, res, next) => {
  const id = req.params

  try {
    const person = await Person.findById(id)
    res.status(201).json(person)
  } catch (error) {
    console.error(error)
    next(error)
  }
}

export const addPerson = async (req, res, next) => {
  const personData = req.body

  try {
    const newPerson = await new Person(personData)
    await newPerson.save()
    res.status(201).json(newPerson)
  } catch (error) {
    next(error)
  }
}

export const editPerson = async (req, res, next) => {
  const personData = req.body
  const { id } = req.params

  try {
    const editedPerson = await Person.findByIdAndUpdate(id, personData, {
      new: true,
    })
    res.status(201).json(editedPerson)
  } catch (error) {
    next(error)
  }
}

export const deletePerson = async (req, res, next) => {
  const { id } = req.params

  try {
    await Person.findByIdAndRemove(id)
    res.status(201).send('Successfully deleted')
  } catch (error) {
    next(error)
  }
}
