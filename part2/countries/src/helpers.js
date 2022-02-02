import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = async search => {
  try {
    const response = await axios({
      baseURL: URL,
      method: 'GET',
      url: search,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function debounce(callback, ms) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(callback.apply(this, args), ms);
  };
}
