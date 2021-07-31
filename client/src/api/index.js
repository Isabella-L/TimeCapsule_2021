import axios from 'axios';

const url = 'http://localhost:5000/capsules';

export const fetchCapsules = () => axios.get(url);

export const createCapsules = (newCapsule) => axios.post(url, newCapsule); //(url, data)