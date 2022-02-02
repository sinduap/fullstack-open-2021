import { API_URL } from './config';
import axios from 'axios';

export const getPersons = async () => {
  try {
    const response = await axios({
      baseURL: API_URL,
      method: 'get',
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePerson = async id => {
  try {
    await axios.delete(`${API_URL}${id}`);
    return 'Person had been deleted';
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addPerson = async person => {
  try {
    await axios({
      baseURL: API_URL,
      method: 'post',
      data: person,
    });
    return 'Person had been added';
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const changePerson = async (id, person) => {
  try {
    await axios.put(`${API_URL}${id}`, person);

    return 'Person had been updated';
  } catch (error) {
    console.error(error);
    throw error;
  }
};
