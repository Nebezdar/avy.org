import { mockProducts, mockUser } from '../mocks/data';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  login: async (credentials) => {
    await delay(500);
    if (credentials.email === "test@example.com" && credentials.password === "password") {
      return { data: { user: mockUser, token: "mock-token" } };
    }
    throw new Error("Invalid credentials");
  },

  getCatalog: async ({ type, category, series, page = 1 }) => {
    await delay(300);
    let filtered = [...mockProducts];
    
    if (type) filtered = filtered.filter(p => p.type === type);
    if (category) filtered = filtered.filter(p => p.category === category);
    if (series) filtered = filtered.filter(p => p.series === series);
    
    return {
      data: {
        items: filtered.slice((page - 1) * 9, page * 9),
        totalItems: filtered.length,
        currentPage: page,
        totalPages: Math.ceil(filtered.length / 9)
      }
    };
  },

  search: async (query) => {
    await delay(200);
    const results = mockProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.article.toLowerCase().includes(query.toLowerCase())
    );
    return { data: results };
  }
}; 