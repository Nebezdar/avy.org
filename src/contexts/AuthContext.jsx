import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверка токена при загрузке
    const token = localStorage.getItem('token');
    if (token) {
      // Здесь можно добавить валидацию токена
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (credentials) => {
    try {
      // Здесь будет запрос к API для авторизации
      const response = await api.login(credentials);
      localStorage.setItem('token', response.token);
      setIsAuthenticated(true);
      setUser(response.user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 