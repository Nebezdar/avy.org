import { useCallback } from 'react';
import { useNotification } from './useNotification';
import { errorHandler } from '../utils/errorHandler';

export const useApiError = () => {
  const notification = useNotification();

  const handleError = useCallback(async (error) => {
    return errorHandler.handleApiError(error, notification);
  }, [notification]);

  return { handleError };
}; 