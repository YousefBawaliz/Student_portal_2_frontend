import axios, { type AxiosInstance, AxiosError } from 'axios';
import { useAuthStore } from '../store/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.tokens?.accessToken;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const authStore = useAuthStore();
    
    if (error.response?.status === 401) {
      // Token has expired
      if (authStore.tokens?.refreshToken) {
        try {
          await authStore.refreshToken();
          // Retry the original request
          const config = error.config;
          if (config) {
            return api(config);
          }
        } catch (refreshError) {
          // Refresh token failed, logout user
          await authStore.logout();
          return Promise.reject(refreshError);
        }
      } else {
        // No refresh token available, logout user
        await authStore.logout();
      }
    }
    return Promise.reject(error);
  }
);

export default api;