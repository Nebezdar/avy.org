import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';

// Временные компоненты
const Login = () => <div>Sign In</div>;
const Register = () => <div>Create Account</div>;

const Navigation = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      background: 'white', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        gap: '2rem' 
      }}>
        <a href="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>AVY.ORG</a>
        <a href="/catalog" style={{ color: '#333', textDecoration: 'none' }}>Models</a>
        <a href="/login" style={{ color: '#333', textDecoration: 'none' }}>Sign In</a>
        <a href="/register" style={{ color: '#333', textDecoration: 'none' }}>Create Account</a>
      </div>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter; 