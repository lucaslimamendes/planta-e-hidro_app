import axios from "axios";

const APIAuth = axios.create({
  baseURL: 'https://planta-e-hidro-api-lab.azurewebsites.net',
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer " + localStorage.getItem('token'),
  }
});

const API = axios.create({
    baseURL: 'https://planta-e-hidro-api-lab.azurewebsites.net',
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
});

export { API, APIAuth };
