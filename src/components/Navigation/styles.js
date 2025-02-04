import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.$active ? 'var(--primary-color)' : 'var(--text-color)'};
  font-weight: ${props => props.$active ? '600' : '400'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.$active ? 'rgba(0, 123, 255, 0.1)' : '#f5f5f5'};
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  .login-btn {
    padding: 0.5rem 1rem;
    color: var(--primary-color);
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: rgba(0, 123, 255, 0.1);
    }
  }

  .register-btn {
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: var(--primary-color-dark);
    }
  }
`;

export const UserMenu = styled.div`
  position: relative;

  .user-button {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #f5f5f5;
    }
  }

  .menu-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.5rem;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    a, button {
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      text-align: left;
      background: none;
      border: none;
      color: var(--text-color);
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background: #f5f5f5;
      }
    }
  }
`; 