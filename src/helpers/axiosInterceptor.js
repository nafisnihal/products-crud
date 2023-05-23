import axios from "axios";
import { BASE_URL } from "./API";

const globalAxiosInstance = axios.create({ baseURL: BASE_URL });
export const basicAxiosInstance = axios.create({ baseURL: BASE_URL });

// request interceptor
globalAxiosInstance.interceptors.request.use(
  function (config) {
    config.headers["apiKey"] = `5apnUXsIP5ymTkXOvrPHiXe6IKM2ufFpqZ8aHEspwuI`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

globalAxiosInstance.interceptors.response.use(function (response) {
  return response;
});

export default globalAxiosInstance;
