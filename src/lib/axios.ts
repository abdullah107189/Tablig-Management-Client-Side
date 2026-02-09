import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
  withCredentials: true, // cookie-based auth
});

// Optional: response interceptor
api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);
