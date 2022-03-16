import { API_URL } from './config'
import axios from 'axios'

export const getPersons = async () => {
  try {
    const response = await axios({
      baseURL: API_URL,
      method: 'get',
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deletePerson = async id => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const addPerson = async person => {
  try {
    const response = await axios.post(API_URL, person)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editPerson = async (id, person) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, person)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
