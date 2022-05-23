import axios from "axios";

const APIAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer " + localStorage.getItem('token'),
  }
});

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
});

export { API, APIAuth };
