export const API_URL = 'http://localhost:5000/api';

export const endpoints = {
  models: '/models',
  search: '/models/search',
  filters: '/models/filters',
  modelByArticle: (articleNumber) => `/models/${articleNumber}`
}; 