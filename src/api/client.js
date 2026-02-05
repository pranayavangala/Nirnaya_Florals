import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export function getToken() {
  return localStorage.getItem("nirnaya_token");
}

export function setToken(token) {
  localStorage.setItem("nirnaya_token", token);
}

export function clearToken() {
  localStorage.removeItem("nirnaya_token");
}

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
