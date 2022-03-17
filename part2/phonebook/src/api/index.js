import axios from 'axios'

const BASE_URL = 'api/persons'

export const getAllPersons = () => axios.get(BASE_URL)

export const addPerson = person => axios.post(BASE_URL, person)

export const editPerson = (id, person) =>
  axios.patch(`${BASE_URL}/${id}`, person)

export const deletePerson = id => axios.delete(`${BASE_URL}/${id}`)
