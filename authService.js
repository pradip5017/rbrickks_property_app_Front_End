// src/api/authService.js
import api from "./axiosInstance";
import axios from 'axios';




// POST /auth/login
export const login = (credentials) => {
  return api.post("/auth/login", credentials);
  
};

// POST /auth/signup
export const signup = (userData) => {
  // return api.post("/auth/signup", userData);
  axios.post("http://localhost:5000/auth/signup", userData)
};







// const API_URL = "http://localhost:5000"; // Replace with your backend URL

// export const signup = async (userData) => {
//   return axios.post(`${API_URL}/auth/signup`, userData);
// };