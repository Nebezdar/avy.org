import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <div className="app">
            <Navigation />
            <AppRoutes />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App; 