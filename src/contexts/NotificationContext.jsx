import { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { 
  NotificationContainer, 
  NotificationItem 
} from '../components/Notification/styles';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = uuidv4();
    setNotifications(prev => [
      ...prev,
      { ...notification, id }
    ]);

    // Автоматическое удаление через 5 секунд
    setTimeout(() => {
      setNotifications(prev => 
        prev.filter(item => item.id !== id)
      );
    }, notification.duration || 5000);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => 
      prev.filter(item => item.id !== id)
    );
  }, []);

  return (
    <NotificationContext.Provider 
      value={{ addNotification, removeNotification }}
    >
      {children}
      <NotificationContainer>
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            onClick={() => removeNotification(notification.id)}
          >
            {notification.message}
          </NotificationItem>
        ))}
      </NotificationContainer>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
}; 