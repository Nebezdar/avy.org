import { API_URL, endpoints } from '../config/api';

export const modelService = {
  // Получение списка моделей с пагинацией
  async getModels(page = 1, limit = 20) {
    try {
      const response = await fetch(
        `${API_URL}${endpoints.models}?page=${page}&limit=${limit}`
      );
      return await response.json();
    } catch (error) {
      console.error('Error fetching models:', error);
      throw error;
    }
  },

  // Живой поиск
  async searchModels(query) {
    try {
      const response = await fetch(
        `${API_URL}${endpoints.search}?query=${encodeURIComponent(query)}`
      );
      return await response.json();
    } catch (error) {
      console.error('Error searching models:', error);
      throw error;
    }
  },

  // Получение модели по артикулу
  async getModelByArticle(articleNumber) {
    try {
      const response = await fetch(
        `${API_URL}${endpoints.modelByArticle(articleNumber)}`
      );
      return await response.json();
    } catch (error) {
      console.error('Error fetching model:', error);
      throw error;
    }
  },

  // Получение фильтров
  async getFilters() {
    try {
      const response = await fetch(`${API_URL}${endpoints.filters}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching filters:', error);
      throw error;
    }
  }
}; 