import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return { user: null, loading: false };
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Здесь будет реальная проверка аутентификации
        setLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const value = {
    user,
    setUser,
    loading
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 