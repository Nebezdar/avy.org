import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductCard from './pages/ProductCard';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />}>
                <Route path=":productType" element={<Catalog />}>
                  <Route path=":category" element={<Catalog />}>
                    <Route path=":series" element={<Catalog />} />
                  </Route>
                </Route>
              </Route>
              <Route path="product/:id" element={<ProductCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App; 