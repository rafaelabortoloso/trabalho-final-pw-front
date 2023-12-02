import axios from 'axios';

const baseURL = 'http://localhost:8080';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (message) => {
  try {
    const response = await api.post('/message', message);
    console.log('response', response);
  } catch (error) {
    console.error(error);
  }
};

export const addAnimal = async (animal) => {
  try {
    const response = await api.post('/add', animal);
    console.log('response', response);
  } catch (error) {
    console.error(error);
  }
};

export const searchByName = async (nome) => {
  try {
    const response = await api.get(`/search/${nome}`);
    console.log('response', response.data.data)
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchById = async (id) => {
  try {
    const response = await api.get(`/searchId/${id}`);
    console.log('response', response);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchAllAnimals = async () => {
  try {
    const response = await api.get('/search');
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletaAnimal = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    console.log('response', response);
  } catch (error) {
    console.error(error);
  }
};

// export const updateAnimalStatus = async (update) => {
//   try {
//     const response = await api.put('/update', update);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message || error.message);
//   }
// };

