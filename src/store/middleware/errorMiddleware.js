import { isRejectedWithValue } from '@reduxjs/toolkit';
import { errorHandler } from '../../utils/errorHandler';

export const errorMiddleware = (store) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload;
    const message = errorHandler.getErrorMessage(error);

    store.dispatch({
      type: 'notification/add',
      payload: {
        type: 'error',
        message,
        duration: 5000
      }
    });

    // Логирование ошибки
    console.error('Redux Error:', {
      action: action.type,
      error: message,
      details: error
    });
  }

  return next(action);
}; 