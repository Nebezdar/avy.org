import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 24px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .logo {
    color: #1A1A1A;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    letter-spacing: -0.5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  a:not(.logo) {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #333;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

export const SignInButton = styled(Link)`
  color: #666;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  
  &:hover {
    color: #333;
    background: #f5f5f5;
  }
`;

export const SignUpButton = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  background: #bab8b8;
  border-radius: 6px;
  
  &:hover {
    background: #333;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #000;
    }
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
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    
    &:first-child {
      color: #666;
      &:hover {
        color: #000;
      }
    }
    
    &:last-child {
      color: #007AFF;
      &:hover {
        color: #0056b3;
      }
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