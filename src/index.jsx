import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { NotificationProvider } from './contexts/NotificationContext';
import AppRouter from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <AppRouter />
      </NotificationProvider>
    </Provider>
  </React.StrictMode>
); 