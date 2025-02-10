import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Nav,
  Container,
  LeftSection,
  RightSection,
  SignInButton,
  SignUpButton
} from './styles';

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <LeftSection>
          <Link to="/" className="logo">AVY</Link>
          <Link to="/catalog">Catalog</Link>
        </LeftSection>
        <RightSection>
          <SignInButton to="/login">Sign In</SignInButton>
          <SignUpButton to="/register">Sign Up</SignUpButton>
        </RightSection>
      </Container>
    </Nav>
  );
};

export default Navigation; 