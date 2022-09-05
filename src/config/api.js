import axios from 'axios';
const API_URL = 'https://cami-upb-2022.herokuapp.com'

export default axios.create({
  baseURL: API_URL
});