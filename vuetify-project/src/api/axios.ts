import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true, // 帶上 HttpOnly Refresh Token Cookie
});

let accessTokenInMemory: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessTokenInMemory = token;
};

export const getAccessToken = () => accessTokenInMemory;

api.interceptors.request.use((config) => {
  if (accessTokenInMemory) {
    config.headers.Authorization = `Bearer ${accessTokenInMemory}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // 嘗試發送 refresh 請求
        const res = await axios.post('/api/auth/refresh', {}, { withCredentials: true });
        const newToken = res.data.accessToken;
        setAccessToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        setAccessToken(null);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
