import { useAuthStore } from "@hooks/store/use-auth-store";
import axios from "axios";

export const httpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const defaultAxios = (method, url, config) =>
  axiosClient({
    method,
    url,
    ...config,
  });

export const axiosMultipart = (method, url, config) =>
  axiosClient({
    method,
    url,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...config,
  });
