import axios from "axios";

export const customAxios = await axios.create({
  baseURL: "http://localhost:3000",
});

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") ?? "TOKEN VALIDO";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
