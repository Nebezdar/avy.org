import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { 
  AuthButtons,
  UserMenu 
} from './styles';

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #333;
    background: rgba(0,0,0,0.05);
  }

  &.active {
    color: #007bff;
    font-weight: 600;
  }
`;

const SignInButton = styled(Link)`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #333;
    background: rgba(0,0,0,0.05);
  }
`;

const CreateAccountButton = styled(Link)`
  color: white;
  background: #007bff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0056b3;
  }
`;

const Navigation = () => {
  const { user } = useAuth() || {};
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Nav>
      <Container>
        <Logo to="/">AVY</Logo>
        <NavLinks>
          <NavLink to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={isActive('/catalog') ? 'active' : ''}>
            Catalog
          </NavLink>
        </NavLinks>
        {user ? (
          <UserMenu>
            <NavLink to="/profile" className={isActive('/profile') ? 'active' : ''}>
              Profile
            </NavLink>
            <button 
              className="user-button"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              {user.email}
            </button>
            
            {showUserMenu && (
              <div className="menu-dropdown">
                <Link to="/profile">Profile</Link>
                <button>Logout</button>
              </div>
            )}
          </UserMenu>
        ) : (
          <AuthButtons>
            <SignInButton to="/login">Sign In</SignInButton>
            <CreateAccountButton to="/register">Create Account</CreateAccountButton>
          </AuthButtons>
        )}
      </Container>
    </Nav>
  );
};

export default Navigation; 