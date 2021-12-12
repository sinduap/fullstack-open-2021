import { API_URL } from "./config";
import axios from "axios";

export const getPersons = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const deletePerson = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const addPerson = async (person) => {
  try {
    await axios.post(API_URL, person);
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const changePerson = async (id, person) => {
  try {
    await axios.put(`${API_URL}/${id}`, person);
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};
