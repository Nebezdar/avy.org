export class AppError extends Error {
  constructor(message, code, details = null) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = 'AppError';
  }
}

export const errorHandler = {
  getErrorMessage(error) {
    if (error instanceof AppError) {
      return error.message;
    }

    if (error.response) {
      // Ошибка от сервера
      const { status } = error.response;
      switch (status) {
        case 400:
          return 'Invalid request. Please check your data.';
        case 401:
          return 'Authentication required. Please sign in.';
        case 403:
          return 'Access denied. You don\'t have permission.';
        case 404:
          return 'Resource not found.';
        case 429:
          return 'Too many requests. Please try again later.';
        default:
          return 'An error occurred. Please try again.';
      }
    }

    if (error.request) {
      // Ошибка сети
      return 'Network error. Please check your connection.';
    }

    // Другие ошибки
    return error.message || 'An unexpected error occurred.';
  },

  async handleApiError(error, notification) {
    const message = this.getErrorMessage(error);
    
    if (error.response?.status === 401) {
      // Перенаправление на страницу входа
      window.location.href = '/login';
    }

    notification.addNotification({
      type: 'error',
      message,
      duration: 5000
    });

    // Логирование ошибки
    console.error('API Error:', {
      message: error.message,
      code: error.response?.status,
      details: error.response?.data
    });

    throw new AppError(message, error.response?.status);
  }
}; 