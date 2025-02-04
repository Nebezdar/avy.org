import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">AVY.ORG</Link>
      <Search placeholder="Search products..." />
    </header>
  );
};

export default Header; 