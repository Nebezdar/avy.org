import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const DOWNLOAD_LIMIT = 3;
const STORAGE_KEY = 'downloadLimits';

export const useDownloadLimit = () => {
  const { isAuthenticated } = useAuth();
  const [downloads, setDownloads] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { count, date } = JSON.parse(stored);
      // Проверяем, не истек ли срок (24 часа)
      if (new Date().getTime() - new Date(date).getTime() < 24 * 60 * 60 * 1000) {
        return count;
      }
    }
    return 0;
  });

  useEffect(() => {
    // Сохраняем состояние в localStorage
    if (!isAuthenticated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        count: downloads,
        date: new Date().toISOString()
      }));
    }
  }, [downloads, isAuthenticated]);

  const checkDownloadAvailability = () => {
    if (isAuthenticated) return true;
    return downloads < DOWNLOAD_LIMIT;
  };

  const incrementDownload = () => {
    if (!isAuthenticated) {
      setDownloads(prev => prev + 1);
    }
  };

  const getRemainingDownloads = () => {
    if (isAuthenticated) return Infinity;
    return DOWNLOAD_LIMIT - downloads;
  };

  return {
    checkDownloadAvailability,
    incrementDownload,
    getRemainingDownloads,
  };
}; 