import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = !!user;

  const login = useCallback(async (credentials) => {
    // TODO: Реализовать логику входа
    console.log('Login with:', credentials);
  }, []);

  const logout = useCallback(() => {
    // TODO: Реализовать логику выхода
    console.log('Logout');
    navigate('/login');
  }, [navigate]);

  return {
    user,
    isAuthenticated,
    login,
    logout
  };
}; 