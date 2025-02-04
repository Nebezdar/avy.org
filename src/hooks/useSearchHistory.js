import { useState, useEffect } from 'react';

const HISTORY_KEY = 'searchHistory';
const MAX_HISTORY_ITEMS = 10;

export const useSearchHistory = () => {
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (query) => {
    if (!query.trim()) return;
    
    setHistory(prev => {
      const filtered = prev.filter(item => item !== query);
      return [query, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return { history, addToHistory, clearHistory };
}; 