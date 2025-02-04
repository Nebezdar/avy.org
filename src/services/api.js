import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-url.com/api',
});

// Интерцептор для добавления токена к запросам
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
};

export const productsAPI = {
  search: (query) => api.get(`/products/search?q=${query}`),
  getProduct: (id) => api.get(`/products/${id}`),
  getCatalog: (params) => api.get('/catalog', { params }),
  getRandomModel: (type) => api.get(`/models/random?type=${type}`),
};

export const downloadAPI = {
  checkLimit: () => api.get('/downloads/check-limit'),
  trackDownload: (modelId) => api.post('/downloads/track', { modelId }),
};

export default api; 