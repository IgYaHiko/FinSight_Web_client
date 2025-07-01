import axios from 'axios';
import { BASE_URL_SERVER } from './apiPaths';

const axiosInstance = axios.create({
  baseURL: BASE_URL_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // ✅ Corrected
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        window.location.href = '/signin';
      } else if (status === 500) {
        console.error("⚠️ Server Error. Please try again later.");
      }

    } else if (error.code === "ECONNABORTED") {
      console.error("⚠️ Request timeout. Please try again.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
