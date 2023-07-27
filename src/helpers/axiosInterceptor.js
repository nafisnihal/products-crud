import axios from "axios";
import { BASE_URL } from "./API";

const globalAxiosInstance = axios.create({ baseURL: BASE_URL });

// request interceptor
globalAxiosInstance.interceptors.request.use(
  function (config) {
    config.headers["apiKey"] = import.meta.env.VITE_API_KEY ?? "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default globalAxiosInstance;
