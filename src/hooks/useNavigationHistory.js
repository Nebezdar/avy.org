import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigationHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('navigationHistory') || '[]');
    history.push(location.pathname);
    localStorage.setItem('navigationHistory', JSON.stringify(history.slice(-5)));
  }, [location]);

  const goBack = () => {
    const history = JSON.parse(localStorage.getItem('navigationHistory') || '[]');
    if (history.length > 1) {
      const previousPath = history[history.length - 2];
      history.pop();
      localStorage.setItem('navigationHistory', JSON.stringify(history));
      navigate(previousPath);
    } else {
      navigate('/');
    }
  };

  return { goBack };
}; 