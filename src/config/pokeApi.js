import axios from 'axios';
const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export default axios.create({
  baseURL: API_URL
});